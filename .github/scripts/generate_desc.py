# 需要搭配generate_desc.yml使用。
# author: Levi
# 给qx的文件在文件开头增加综合链接注释

import os
import re

FOLDER_NAME = 'scripts'

def get_repo_info():
    repo = os.getenv("GITHUB_REPOSITORY")
    if repo and "/" in repo:
        username, name = repo.split("/", 1)
        return username, name
    return 'czy13724', 'Quantumult-X'

# Generate the custom header
def generate_custom_header(file_name, file_extension):
    username, repo = get_repo_info()
    # Custom header format
    header_format = """
// Quantumult X引用地址： https://raw.githubusercontent.com/{username}/{repo}/main/{folder}/{file}{ext}
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/{username}/{repo}/main/Surge/{file}.sgmodule
// Stash 覆写地址： https://raw.githubusercontent.com/{username}/{repo}/main/Stash/{file}.stoverride
""".strip('\n')
    return header_format.format(username=username, repo=repo, folder=FOLDER_NAME, file=file_name, ext=file_extension)

# Check if the file already contains any of the key comments to be replaced
def contains_key_comments(file_content):
    key_comments_pattern = re.compile(r"// Quantumult X引用地址.*?// Stash 覆写地址.*?\n", re.DOTALL)
    matches = key_comments_pattern.findall(file_content)
    return matches

# Regular expression pattern for replacing old custom headers
pattern = re.compile(r'(// Quantumult X引用地址.*?// Stash 覆写地址.*?)\n', re.DOTALL)

folder_path = FOLDER_NAME
if not os.path.isdir(folder_path):
    print(f"Error: {folder_path} does not exist.")
    raise SystemExit(1)

for file_name in os.listdir(folder_path):
    file_base, file_extension = os.path.splitext(file_name)
    if file_extension not in ('.js', '.conf', '.snippet'):
        continue

    file_path = os.path.join(folder_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        file_content = f.read()

    custom_header = generate_custom_header(file_base, file_extension)
    matches = contains_key_comments(file_content)
    if matches:
        file_content = re.sub(pattern, '', file_content)
        updated_file_content = custom_header + '\n' + file_content
    else:
        updated_file_content = custom_header + '\n\n' + file_content

    if updated_file_content != file_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_file_content)
        print(f"Updated {file_path}")
    else:
        print(f"Skip {file_path} (no changes)")
