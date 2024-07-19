# 搭配Update Task Collection.yml使用 每日自动运行一次 令牌默认GISTID，需要授予gist读写权限和仓库读写权限。
# 作者：Levi
# 使用说明1：方便导入qx、loon等工具快捷引用。
# 使用说明2：conf文件命名为‘xx获取ck’或‘xx获取token’。js名称和conf一致。只有conf的情况下不创建addons会忽略。举例：如果你上传了‘1.js’没有‘1获取ck.conf’或‘1获取token.conf’则合集为‘config：1.js...’。如果两项都有，如‘1.js’和‘1获取ck.conf’或‘1获取token.conf’则合集为‘config：1.js，addons：1获取ck.conf’或‘1获取token.conf’。如果只有conf且匹配不到对应js则忽略该conf

import os
import requests
import json
import random
import re

def generate_random_cron():
    minute = random.randint(0, 59)
    hour = random.randint(0, 23)
    return f"{minute} {hour} * * *"

def extract_cron_from_content(content):
    cron_pattern = r'\b(\d{1,2}\s+\d{1,2}\s+\*\s+\*\s+\*)\b'
    match = re.search(cron_pattern, content)
    return match.group(1) if match else None

def find_matching_js_and_conf(gist_files):
    js_files = {}
    conf_files = {}
    for file_name, file_info in gist_files.items():
        if file_name.endswith('.js'):
            js_files[file_name] = file_info
        elif file_name.endswith('获取ck.conf') or file_name.endswith('获取token.conf'):
            base_name = file_name.rsplit('获取', 1)[0]
            conf_files[base_name] = file_info
    
    matched_pairs = []
    for js_name, js_info in js_files.items():
        base_name = os.path.splitext(js_name)[0]
        matching_conf = conf_files.get(base_name)
        matched_pairs.append((js_info, matching_conf))
    
    return matched_pairs

def generate_task_json():
    github_username = "czy13724"
    github_token = os.getenv("GISTID")
    headers = {"Authorization": f"token {github_token}"}
    api_url = f"https://api.github.com/users/{github_username}/gists"


    response = requests.get(api_url, headers=headers)

    if response.status_code == 200:
        gists = response.json()
        result = {
            "name": "Levi任务合集订阅",
            "description": "如有侵权请联系@PMLevibot删除。tg机器人：https://t.me/PMLevibot",
            "task": []
        }

        for gist in gists:
            matched_pairs = find_matching_js_and_conf(gist['files'])
            
            for js_file, conf_file in matched_pairs:
                content_response = requests.get(js_file['raw_url'])
                if content_response.status_code == 200:
                    content = content_response.text
                    cron = extract_cron_from_content(content) or generate_random_cron()
                else:
                    cron = generate_random_cron()

                task_entry = {
                    "config": f"{cron} {js_file['raw_url']}, tag={os.path.splitext(js_file['filename'])[0]}, enabled=false"
                }

                if conf_file:
                    task_entry["addons"] = f"{conf_file['raw_url']}, tag={os.path.splitext(conf_file['filename'])[0]}"

                result["task"].append(task_entry)

        output_file_path = "levitask.gallery.json"
        with open(output_file_path, "w", encoding="utf-8") as output_file:
            json.dump(result, output_file, indent=4, ensure_ascii=False)

        print(f"Updated collection saved to {output_file_path}")
    else:
        print(f"Failed to retrieve Gist list. Status code: {response.status_code}")

if __name__ == "__main__":
    generate_task_json()
