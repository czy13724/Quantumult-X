# author: Levi
# 搭配convert_js&conf&snippet_stoverride.yml使用。可将qx的js/conf/snippet文件转换为Stash可用的stoverride文件。

import os
import re
import subprocess
import random

# Generate a random number at the beginning to maintain consistency in usage
random_number = random.randint(0, 99)


def task_local_to_stoverride(js_content, project_name, random_number):
    task_local_content = ''
    # Check if [task_local] section exists
    task_local_block_match = re.search(r'\[task_local\](.*?)\n\[', js_content, re.DOTALL | re.IGNORECASE)
    if task_local_block_match:
        task_local_block = task_local_block_match.group(1)
        # Match the first link in the [task_local] section and its preceding cron expression
        task_local_match = re.search(r'((?:0\s+\d{1,2},\d{1,2},\d{1,2}\s+.*?)+)\s+(https?://\S+)', task_local_block)
        if task_local_match:
            cronexp, script_url = task_local_match.groups()
            # Ensure script-path does not include anything after a comma in the URL
            script_url = script_url.split(',')[0]
            # Extract the file name from the link to use as the tag
            tag = os.path.splitext(os.path.basename(script_url))[0]
            # Construct the stoverride cron task section
            task_local_content = f'cron: \n  script: \n      - name: "{project_name}_{random_number}"\n      cron: "{cronexp}"\n      timeout: 60\n'
    # Return the task_local section content, if any
    return task_local_content


def mitm_to_stoverride(js_content):
    mitm_content = ''
    # search [MITM]/[mitm] section
    mitm_match = re.search(r'\[mitm\]\s*([^=\n]+=[^\n]+)\s*', js_content, re.DOTALL | re.IGNORECASE)
    # if found
    if mitm_match:
        mitm_block = mitm_match.group(1)
        # remove "hostname ="
        mitm_block = re.sub(r'hostname\s*=\s*', '', mitm_block)
        # Split hostname
        mitm_hosts = mitm_block.strip().split(',')
        # Add "-" prefix to each hostname so that it conforms to stoverride format
        mitm_content = '\n'.join([f'    - "{host.strip()}"' for host in mitm_hosts if host.strip()])
    # Returns the processed MITM string
    return mitm_content

def script_to_stoverride(js_content, project_name, random_number):
    script_content = ''
    # match rewrite_local part
    rewrite_matches = re.finditer(
        r'^(.*?)(?:\s*url\s+script-(response|request)-(body|header)\s+(.*))$', 
        js_content, 
        re.MULTILINE
    )
    for match in rewrite_matches:
        pattern, method, kind, path = match.groups()
        stoverride_method = 'request' if method == 'request' else 'response'
      # kind is not used for the time being, the actual process may need to change the script path according to 'body' and 'header'.
        script_content += f'  \n  - match: {pattern.strip()}\n'
        script_content += f'    name: {project_name}_{random_number}\n'
        script_content += f'    type: {stoverride_method}\n'
        script_content += f'    require-body: true\n'
        script_content += f'    max-size: -1\n'
        script_content += f'    timeout: 60\n'  
    
    return script_content

def script_providers_to_stoverride(project_name, script_path):
    # Use the same random_number for consistency
    name = f"{project_name}_{random_number}"
    # Use the correct script_path as url
    url = script_path.strip()
    interval = 86400  
    script_providers_content = (
        f'script-providers:\n'
        f'  "{project_name}_{random_number}":\n'
        f'    url: {url}\n'
        f'    interval: {interval}\n'
    )
    return script_providers_content


def js_to_stoverride(js_content):
    # Check for the presence of the [rewrite_local] and [mitm]/[MITM] sections
    if not (re.search(r'\[rewrite_local\]', js_content, re.IGNORECASE) or
            re.search(r'\[mitm\]', js_content, re.IGNORECASE) or
            re.search(r'\[MITM\]', js_content, re.IGNORECASE)):
        return None
    
    # Extract information from the JS content
    name_match = re.search(r'项目名称：(.*?)\n', js_content)
    desc_match = re.search(r'使用说明：(.*?)\n', js_content)

    # If there is no project name and description, use the last part of the matched URL as the project name
    if not (name_match and desc_match):
        url_pattern = r'url\s+script-(?:response-body|request-body|echo-response|request-header|response-header|analyze-echo-response)\s+(\S+.*?)$'
        last_part_match = re.search(url_pattern, js_content, re.MULTILINE)
        if last_part_match:
            project_name = os.path.splitext(os.path.basename(last_part_match.group(1).strip()))[0]
        else:
            raise ValueError("文件内容匹配错误，请按照要求修改，详情请按照levifree.tech文章内容修改")

        project_desc = f"{project_name} is automatically converted by LEVI SCRIPT; if not available plz use Script-Hub."

    else:
        project_name = name_match.group(1).strip()
        project_desc = desc_match.group(1).strip()

    # Create the final stoverride content string
    stoverride_content = (
        f"name: |-\n  {project_name}\ndesc: |-\n  {project_desc}\n\n"
        "http:\n\n"
    )

    # Process mitm content
    mitm_section = mitm_to_stoverride(js_content)
    if mitm_section:
        stoverride_content += f"  mitm:\n{mitm_section}\n"

    # Extract the script section
    script_section = script_to_stoverride(js_content, project_name, random_number)
    if script_section:
        stoverride_content += f"\n  script:{script_section}\n"

    # Search for the URL pattern in the rewrite_local section and retrieve the first match
    url_pattern = r'url\s+script-(?:response-body|request-body|response-header|request-header|echo-response|analyze-echo-response)\s+(\S+)'
    url_match = re.search(url_pattern, js_content, re.IGNORECASE)
    
    # If a URL match is not found, throw an error
    if not url_match:
        raise ValueError("未找到脚本路径。请确保在 js/conf/snippet 文件中包含了至少一个有效的链接.")

    script_path = url_match.group(1).strip()

    # Add the script-providers section with the project name and the extracted script path
    script_providers_section = script_providers_to_stoverride(project_name, script_path)
    stoverride_content += f"\n{script_providers_section}\n"

    # Process task_local section
    task_local_section = task_local_to_stoverride(js_content, project_name, random_number)
    if task_local_section:
        stoverride_content += f"\n{task_local_section}\n"

    # Return the final stoverride content
    return stoverride_content


def main():
    # Process files in the 'scripts' folder
    qx_folder_path = 'scripts'
    if not os.path.exists(qx_folder_path):
        print(f"Error: {qx_folder_path} does not exist.")
        return

    # Define the supported file extensions
    supported_extensions = ('.js', '.conf', '.snippet')

    for file_name in os.listdir(qx_folder_path):
        if file_name.endswith(supported_extensions):
            # File extension check for .js, .conf, or .snippet
            file_path = os.path.join(qx_folder_path, file_name)
            with open(file_path, 'r', encoding='utf-8') as file:
                js_content = file.read()
                stoverride_content = js_to_stoverride(js_content)
                
                if stoverride_content is not None:
                    # Write stoverride content to 'stash' folder if stoverride_content is not None
                    stash_folder_path = 'Stash'
                    os.makedirs(stash_folder_path, exist_ok=True)
                    stoverride_file_path = os.path.join(stash_folder_path, f"{os.path.splitext(file_name)[0]}.stoverride")
                    
                    with open(stoverride_file_path, "w", encoding="utf-8") as stoverride_file:
                        stoverride_file.write(stoverride_content)
                    print(f"Generated {stoverride_file_path}")
                else:
                    # Skip files without the required sections
                    print(f"跳过 {file_name} 由于文件缺失匹配内容，请仔细检查.")

# Define regular expressions that match comments
commit_pattern = re.compile(r'// Adding a dummy stoverride commit\((\d+)\)')

# Extract the maximum count value from the content
def extract_max_count(content):
    counts = commit_pattern.findall(content)
    max_count = max(map(int, counts)) if counts else 0
    return max_count

# Update the comment count in the file
def update_file_commit_count(file_path):
    with open(file_path, 'r+', encoding='utf-8') as file:
        content = file.read()

     # Extract the maximum count value in an existing comment
        max_count = extract_max_count(content)

       # Remove all existing count annotations
        content = re.sub(commit_pattern, '', content)

        # New count value is the maximum count value plus 1
        new_count = max_count + 1
        new_commit_comment = f'// Adding a dummy stoverride commit({new_count})\n'

       # Append new comment at end of document
        content = content.rstrip() + '\n' + new_commit_comment

       # Write new file contents
        file.seek(0)
        file.write(content)
        file.truncate()

# Process only files in the `scripts` directory
def process_scripts_directory(directory):
    scripts_dir_path = os.path.join(directory, 'scripts')
    if os.path.exists(scripts_dir_path) and os.path.isdir(scripts_dir_path):
        for file_name in os.listdir(scripts_dir_path):
            if file_name.endswith(('.js', '.conf', '.snippet')):
                file_path = os.path.join(scripts_dir_path, file_name)
                update_file_commit_count(file_path)
    else:
        print("'scripts' 目录不存在.")

def main():
    # Call the function to process files in 'scripts' directory
    process_scripts_directory('.')

    # Add all changes to git
    subprocess.run(['git', 'add', '.'])
    # Commit these changes
    subprocess.run(['git', 'commit', '-m', 'Update commit counts'])

if __name__ == "__main__":
    main()
