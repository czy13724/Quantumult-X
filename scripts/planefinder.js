/*
项目名称： planefinder
项目作者： Levi
下载地址： https://apps.apple.com/app/id361273585
使用说明： 开脚本再开软件，未成功恢复购买。如使用非qx请访问'https://github.com/czy13724/Quantumult-X'查询对应脚本或通过script-hub自行转换。下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，禁止用于商业用途。

[rewrite_local]
https:\/\/app-live\.planefinder\.net\/api\/v2\/subscription\/itunes\/verify url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/planefinder.js    

[mitm]
hostname = app-live.planefinder.net
*/

var Levi = JSON.parse($response.body);
Levi= {
    "success": true,
    "payload": {
      "userID": -1,
      "sessionToken": "pf.anon-65c1c212b43e9-1707196946.1f39787d44ebc23c9a950ab668d76ecc4b52261af99da7717544d69ac13cb0a7",
      "siwaID": null,
      "subscription": {
        "manageURL": "itms-apps:\/\/apps.apple.com\/account\/subscriptions",
        "expiryTS": 4102329600,
        "type": "itunes",
        "renews": false
      },
      "sessionType": "ios-anon",
      "v": 1,
      "email": "320001713366056@itunes-anonymous-account.planefinder.net",
      "permissions": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        15,
        16
      ]
    }
  }
$done({body: JSON.stringify(Levi)});
