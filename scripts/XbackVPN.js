
// Quantumult X引用地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/XbackVPN.js
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Surge/XbackVPN.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Loon/XbackVPN.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Stash/XbackVPN.stoverride

/*
项目名称：XbackVPN
项目作者：David
下载地址：https://apps.apple.com/app/id1659638467
使用说明：必须创建一个免费账号，不建议使用appleid注册。
使用声明：⚠️仅供参考，🈲️转载与售卖！


[rewrite_local]

^https:\/\/client-alphant\.xback\.io\/alphant\/api\/member\/getInfo$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/XbackVPN.js

[mitm]
hostname = client-alphant.xback.io
*/


var objc = JSON.parse($response.body);

var xToken = $request.headers["x-token"];

objc = {
  "code": "SUCCESS",
  "success": true,
  "data": {
    "expireUnix": 4000103307,
    "appleSub": "apple_pay",
    "id": "4",
    "productNo": "com.xback.subscription.1year",
    "limited_offer": false,
    "duration": 366,
    "type": "yearly",
    "newToken": xToken,
    "isEnable": true,
    "desc": "Yearly",
    "vipNo": "1",
    "duration": 99999999,
    "paypalSub": "",
    "isPaySinceRegister": true
  },
  "msg": "success",
  "requestId": "2f2bfc10df558190db386c141b24d1a1"
};

$done({ body: JSON.stringify(objc) });

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit
