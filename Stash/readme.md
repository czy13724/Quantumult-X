本文件夹（Stash）内所有文件均由脚本转换，如不可用，请尝试使用[script-hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)。
注：
* 转换脚本目前支持转换js/conf/snippet到stoverride.
* 转换脚本目前支持转换[rewrite_local]为多条规则的js/conf/snippet.如原文件该部分不止一条规则也可使用该文件夹内的stoverride.
* 使用时如您发现脚本里的[rewrite_local]或[mitm]无内容 说明脚本转换失败，请不要在软件中进行远程引用，尝试使用[script-hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)进行转换.
* 如您是脚本开发者，请知悉该转换脚本需要搭配工作流运行。
  [使用教程](https://levifree.tech/2024/02/04/自动转换js-conf-snippet到stoverride/)
  [工作流地址](https://raw.githubusercontent.com/czy13724/Quantumult-X/main/.github/workflows/convert_js_to_stoverride.yml)
  [脚本地址](https://raw.githubusercontent.com/czy13724/Quantumult-X/main/.github/scripts/convert_js_to_stoverride.py)
* 如您是本文件夹stoverride脚本引用者，通过获取本文件夹文件的raw链接进行远程引用即可，注意检查脚本中[script]或[mitm]是否有无内容，如没有内容请不要引用该文件。
