#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Scripts Index Generator (脚本目录索引生成器)
Author: Levi
Description: 自动扫描 scripts/ 目录下的脚本头部元数据，生成并维护 docs/SCRIPTS.md 索引表。
"""

import os
import re

def get_repo_info():
    repo = os.getenv("GITHUB_REPOSITORY")
    if repo and "/" in repo:
        username, name = repo.split("/", 1)
        return username, name
    return 'czy13724', 'Quantumult-X'

def extract(pattern, text):
    m = re.search(pattern, text)
    return m.group(1).strip() if m else ''

def main():
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    scripts_dir = os.path.join(root, 'scripts')
    output_path = os.path.join(root, 'docs', 'SCRIPTS.md')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    username, repo = get_repo_info()

    rows = []
    for name in sorted(os.listdir(scripts_dir)):
        if not name.endswith(('.js', '.conf', '.snippet')):
            continue
        path = os.path.join(scripts_dir, name)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        title = extract(r'项目名称[：:]\s*(.*)', content) or os.path.splitext(name)[0]
        author = extract(r'项目作者[：:]\s*(.*)', content)
        desc = extract(r'使用说明[：:]\s*(.*)', content)
        script_url = f'https://raw.githubusercontent.com/{username}/{repo}/main/scripts/{name}'
        rows.append((title, author, desc, script_url))

    with open(output_path, 'w', encoding='utf-8') as out:
        out.write('# 📚 脚本索引 (Scripts Index)\n\n')
        out.write('> 💡 此文档由 GitHub Actions 自动化工作流自动生成与维护，请勿手动编辑。\n\n')
        out.write('| 项目名称 | 脚本作者 | 使用说明 | 脚本链接 |\n')
        out.write('| :--- | :--- | :--- | :--- |\n')
        for title, author, desc, script_url in rows:
            desc_clean = desc.replace('|', '\\|') if desc else '—'
            author_clean = author if author else '—'
            out.write(f'| **{title}** | {author_clean} | {desc_clean} | [导入链接]({script_url}) |\n')

    print(f"Successfully generated {output_path} with {len(rows)} scripts.")

if __name__ == '__main__':
    main()
