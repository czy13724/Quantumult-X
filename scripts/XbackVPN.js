



// Quantumult X引用地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/XbackVPN.js
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Surge/XbackVPN.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Loon/XbackVPN.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Stash/XbackVPN.stoverride

/*
项目名称：XbackVPN
项目作者：David
下载地址：https://apps.apple.com/us/app/xback-faster-and-more-secure/id1659638467?l=en-GB
使用说明：You need to create an account for VIP to be activate
使用声明：⚠️仅供参考，🈲️转载与售卖！


[rewrite_local]

https:\/\/client-alphant\.xback\.io\/alphant\/api\/member\/getInfo url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/XbackVPN.js


[mitm]
hostname = client-alphant.xback.io


*/

var objc = JSON.parse($response.body);

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
      "isEnable": true,
      "desc": "Yearly",
    "vipNo": "1",
  "duration": 99999999,
    "newToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYyNjQ1NDMsImlhdCI6MTcwMzY3MjU0MywiaXNzIjoiWGJhY2sgQ2xpZW50IEFwaSIsIm5iZiI6MTcwMzY3MTU0MywiVVVJRCI6ImVjYzE1MjlmLTI4YmItNGQ3OC05MjE5LTRmMDA1YmRkMmM2MyIsIkdyb3VwSWQiOjIwMDAwMDAsIlVzZXJOYW1lIjoidGV4aXc0MTM0M0B4YWd5bS5jb20iLCJDb21wYW55SWQiOjIwMDAwMDAsIkNvbXBhbnlOYW1lIjoiIiwiQnVmZmVyVGltZSI6ODY0MDAsIkRldmljZUNvZGUiOiJFNTg5MDU0Ri1BRjUyLTRGQjItOURDNy0yNkNEN0JGN0Y4RDIiLCJFbmRVbml4IjoxNzA0MTAzMzA3fQ.9Z9MlgaeOO0c5XH9OkkVsEfUo9dw3Nrdu_tAl4XrUmk",
    "paypalSub": "",
    "isPaySinceRegister": true
  },
  "msg": "success",
  "requestId": "2f2bfc10df558190db386c141b24d1a1"
};

$done({ body: JSON.stringify(objc)});
// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit
