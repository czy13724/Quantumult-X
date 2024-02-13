# 需要搭配generate_desc.yml使用。
# author: Levi
# 给qx的文件在文件开头增加综合链接注释

import os
import requests
import base64
import re

# Repository details
GITHUB_USERNAME = 'czy13724'
REPO_NAME = 'Quantumult-X'
FOLDER_NAME = 'scripts'

# GitHub API URL
GITHUB_API = 'https://api.github.com'

# Headers for using the default GITHUB_TOKEN provided by GitHub Actions
headers = {
    'Authorization': f'token {os.getenv("GITHUB_TOKEN")}',
    'Accept': 'application/vnd.github.v3+json'
}

def get_file_list(folder_name):
    contents_url = f"{GITHUB_API}/repos/{GITHUB_USERNAME}/{REPO_NAME}/contents/{folder_name}"
    response = requests.get(contents_url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching repo contents: {response.status_code}")
        return None

def update_file(file_path, b64_encoded_content, sha):
    update_url = f"{GITHUB_API}/repos/{GITHUB_USERNAME}/{REPO_NAME}/contents/{file_path}"
    message = f"为{file_path}增加综合注释"
    data = {
        'message': message,
        'content': b64_encoded_content,
        'sha': sha
    }
    response = requests.put(update_url, headers=headers, json=data)
    if response.status_code == 200:
        print(f"File updated successfully: {file_path}")
    else:
        print(f"Error updating file: {response.status_code}, Response: {response.json()}")

# Generate the custom header
def generate_custom_header(file_name, file_extension):
    # Custom header format
    header_format = """
// Quantumult X引用地址： https://raw.githubusercontent.com/{username}/{repo}/main/{folder}/{file}{ext}
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/{username}/{repo}/main/surge/{file}.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/{username}/{repo}/main/loon/{file}.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/{username}/{repo}/main/stash/{file}.stoverride
""".strip('\n')
    return header_format.format(username=GITHUB_USERNAME, repo=REPO_NAME, folder=FOLDER_NAME, file=file_name, ext=file_extension)

# Check if the file already contains any of the key comments to be replaced
def contains_key_comments(file_content):
    key_comments_pattern = re.compile(r"// Quantumult X引用地址.*?// Stash 覆写地址.*?\n", re.DOTALL)
    matches = key_comments_pattern.findall(file_content)
    return matches

# Fetch the list of files
files = get_file_list(FOLDER_NAME)

# Regular expression pattern for replacing old custom headers
pattern = re.compile(r'(// Quantumult X引用地址.*?// Stash 覆写地址.*?)\n', re.DOTALL)

for file in files:
    file_name, file_extension = os.path.splitext(file['name'])
    
    if file_extension in ('.js', '.conf', '.snippet'):
        download_url = file['download_url']
        file_sha = file['sha']

        # Download the existing file content
        file_content_response = requests.get(download_url)

        if file_content_response.status_code == 200:
            file_content = file_content_response.content.decode('utf-8')
            custom_header = generate_custom_header(file_name, file_extension)

            # Check if the file contains the key comments and remove them
            matches = contains_key_comments(file_content)
            if matches:
                # Use sub() method to replace all matched key comments with an empty string
                file_content = re.sub(pattern, '', file_content)
                # Concatenate the custom header with the cleaned file content
                updated_file_content = custom_header + '\n' + file_content
            else:
                # Prepend the custom header if key comments do not exist
                updated_file_content = custom_header + '\n\n' + file_content

            # Encode the updated file content in base64
            b64_encoded_content = base64.b64encode(updated_file_content.encode('utf-8')).decode('utf-8')

            # Update the file on GitHub
            update_file(file['path'], b64_encoded_content, file_sha)
        else:
            print(f"Failed to download file content: {file_content_response.status_code}")
