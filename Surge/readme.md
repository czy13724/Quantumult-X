本文件夹（Surge）内所有文件均由脚本转换，如不可用，请尝试使用[script-hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)。
注：
* 转换脚本目前支持转换js/conf/snippet到sgmodule.
* 转换脚本目前支持转换[rewrite_local]为多条规则的js.如原文件该部分不止一条规则也可使用该文件夹内的sgmodule.
* 使用时如您发现脚本里的[rewrite_local]或[mitm]无内容 说明脚本转换失败，请不要在软件中进行远程引用，尝试使用[script-hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)进行转换.
* 如您是脚本开发者，请知悉该转换脚本需要搭配工作流运行。
  [使用教程](https://levifree.tech/2024/01/29/%E8%87%AA%E5%8A%A8%E8%BD%AC%E6%8D%A2js-conf-snippet%E5%88%B0sgmodule/)
  [工作流地址](https://raw.githubusercontent.com/czy13724/Quantumult-X/main/.github/workflows/convert_js_to_sgmodule.yml)
  [脚本地址](https://raw.githubusercontent.com/czy13724/Quantumult-X/main/.github/scripts/convert_js_to_sgmodule.py)
* 如您是脚本使用者，通过获取本文件夹文件的raw链接进行远程引用即可，注意检查脚本中[rewrite_local]或[mitm]是否有无内容，如没有内容请不要引用该文件。
