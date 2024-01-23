import os
import re

def insert_append(content):
    # Insert %APPEND% after the first '=' sign
    return re.sub(r'=', '= %APPEND%', content, count=1)

def js_to_sgmodule(js_content):
    # Extract information from the JS content
    name_match = re.search(r'项目名称：(.*?)\n', js_content)
    desc_match = re.search(r'使用说明：(.*?)\n', js_content)
    mitm_match = re.search(r'\[mitm\]\s*([^=\n]+=[^\n]+)\s*', js_content, re.DOTALL | re.MULTILINE)
    hostname_match = re.search(r'hostname\s*=\s*([^=\n]+=[^\n]+)\s*', js_content, re.DOTALL | re.MULTILINE)

    # If there is no project name and description, use the last part of the matched URL as the project name
    if not (name_match and desc_match):
        url_pattern = r'url\s+script-(?:response-body|request-body|echo-response|request-header|response-header|analyze-echo-response)\s+(\S+.*?)$'
        last_part_match = re.search(url_pattern, js_content, re.MULTILINE)
        if last_part_match:
            project_name = os.path.splitext(os.path.basename(last_part_match.group(1).strip()))[0]
        else:
            raise ValueError("Invalid JS file format")
        
        project_desc = f"Generated from {project_name}"

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

[MITM]
{mitm_content_with_append}
"""

    # Process each rewrite rule
    rewrite_local_pattern = re.compile(r'\[rewrite_local\]\s*(.*?)\s*\[mitm\]\s*hostname\s*=\s*(.*?)\s*', re.DOTALL | re.MULTILINE)
    rewrite_local_matches = list(rewrite_local_pattern.finditer(js_content))

    if not rewrite_local_matches:
        raise ValueError("No [rewrite_local] rule found")

    # Append to sgmodule content
    sgmodule_content += "[Script]\n"
    for rewrite_match_item in rewrite_local_matches:
        rewrite_local_content = rewrite_match_item.group(1).strip()

        # Extract pattern and script type from rewrite_local_content
        pattern_script_matches = re.finditer(r'^(.*?)\s*url\s+script-(response-body|request-body|echo-response|request-header|response-header|analyze-echo-response)\s+(\S+.*?)$', rewrite_local_content, re.MULTILINE)

        if not pattern_script_matches:
            raise ValueError("Invalid rewrite_local format")

        for pattern_script_match in pattern_script_matches:
            pattern = pattern_script_match.group(1).strip()
            script_type = pattern_script_match.group(2).strip()
            script = pattern_script_match.group(3).strip()

            # Remove the '-body' or '-header' suffix from the script type
            script_type = script_type.replace('-body', '').replace('-header', '')

            # Append to sgmodule content
            sgmodule_content += f"{project_name} = type=http-{script_type},pattern={pattern},requires-body=1,max-size=0,script-path={script}\n"

    return sgmodule_content

def main():
    # Process each file in the 'qx' folder
    qx_folder_path = 'scripts'
    if not os.path.exists(qx_folder_path):
        print(f"Error: {qx_folder_path} does not exist.")
        return

    for file_name in os.listdir(qx_folder_path):
        if file_name.endswith(".js"):
            file_path = os.path.join(qx_folder_path, file_name)
            with open(file_path, 'r', encoding='utf-8') as js_file:
                js_content = js_file.read()
                sgmodule_content = js_to_sgmodule(js_content)

                # Write sgmodule content to surge folder
                surge_folder_path = 'Surge'
                os.makedirs(surge_folder_path, exist_ok=True)
                sgmodule_file_path = os.path.join(surge_folder_path, f"{os.path.splitext(file_name)[0]}.sgmodule")
                with open(sgmodule_file_path, "w", encoding="utf-8") as sgmodule_file:
                    sgmodule_file.write(sgmodule_content)

                print(f"Generated {sgmodule_file_path}")

                # Add a dummy change and commit
                with open(file_path, 'a', encoding='utf-8') as js_file:
                    js_file.write("\n// Adding a dummy change to trigger git commit\n")

                os.system(f'git add {file_path}')
                os.system('git commit -m "Trigger update"')

if __name__ == "__main__":
    main()
