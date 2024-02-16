# author:Levi
# 搭配convert js to sgmodule.yml使用。可将qx的js/conf/snippet文件转换为sgmodule文件。

import os
import re
import subprocess

def insert_append(content):
    # Insert %APPEND% after the first '=' sign
    return re.sub(r'=', '= %APPEND%', content, count=1)

def task_local_to_sgmodule(js_content):
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
            # Construct the SGModule cron task section
            task_local_content = f"{tag} = type=cron, cronexp=\"{cronexp}\", script-path={script_url}, timeout=60, wake-system=1\n"
    # Return the task_local section content, if any
    return task_local_content

def js_to_sgmodule(js_content):
    # Check for the presence of the [rewrite_local] and [mitm]/[MITM] sections
    if not (re.search(r'\[rewrite_local\]', js_content, re.IGNORECASE) or
            re.search(r'\[mitm\]', js_content, re.IGNORECASE) or
            re.search(r'\[MITM\]', js_content, re.IGNORECASE)):
        return None
    
    # Extract information from the JS content
    name_match = re.search(r'项目名称：(.*?)\n', js_content)
    desc_match = re.search(r'使用说明：(.*?)\n', js_content)
    mitm_match = re.search(r'\[mitm\]\s*([^=\n]+=[^\n]+)\s*', js_content, re.DOTALL | re.IGNORECASE)
    hostname_match = re.search(r'hostname\s*=\s*([^=\n]+=[^\n]+)\s*', js_content, re.DOTALL | re.IGNORECASE)

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

    mitm_content = mitm_match.group(1).strip() if mitm_match else ''
    hostname_content = hostname_match.group(1).strip() if hostname_match else ''

    # Insert %APPEND% into mitm and hostname content
    mitm_content_with_append = insert_append(mitm_content)

    # Generate sgmodule content
    sgmodule_content = f"""#!name={project_name}
#!desc={project_desc}
#!====================================
#!⚠️【免责声明】
#!------------------------------------------
#!1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
#!2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
#!3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
#!4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
#!5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
#!6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
#!7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。

[MITM]
{mitm_content_with_append}
[Script]
"""

    # convert and add [task_local] section
    task_local_sgmodule_content = task_local_to_sgmodule(js_content)
    sgmodule_content += task_local_sgmodule_content
    
    # Regex pattern to find rewrite_local
    rewrite_local_pattern = r'^(.*?)\s*url\s+script-(response-body|request-body|echo-response|request-header|response-header|analyze-echo-response)\s+(\S+)'
    rewrite_local_matches = re.finditer(rewrite_local_pattern, js_content, re.MULTILINE)

    for match in rewrite_local_matches:
        pattern = match.group(1).strip()
        script_type = match.group(2).replace('-body', '').replace('-header', '').strip()
        script_path = match.group(3).strip()

        # Append the rewrite rule to the SGModule content
        sgmodule_content += f"{project_name} = type=http-{script_type}, pattern={pattern}, script-path={script_path}, requires-body=true, max-size=-1, timeout=60\n"

    return sgmodule_content


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
                content = file.read()
                sgmodule_content = js_to_sgmodule(content)
                
                if sgmodule_content is None:
                    # Skip files without the required sections
                    print(f"跳过 {file_name} 由于文件缺失匹配内容，请仔细检查.")
                    continue

                # Write sgmodule content to 'Surge' folder
                surge_folder_path = 'Surge'
                os.makedirs(surge_folder_path, exist_ok=True)
                sgmodule_file_path = os.path.join(surge_folder_path, f"{os.path.splitext(file_name)[0]}.sgmodule")
                with open(sgmodule_file_path, "w", encoding="utf-8") as sgmodule_file:
                    sgmodule_file.write(sgmodule_content)

                print(f"Generated {sgmodule_file_path}")

# Define regular expressions that match comments
commit_pattern = re.compile(r'// Adding a dummy sgmodule commit\((\d+)\)')

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
        new_commit_comment = f'// Adding a dummy sgmodule commit({new_count})\n'

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
