/*
项目名称： PikPak
项目作者： David
下载地址： https://apps.apple.com/us/app/pikpak-private-cloud-saver/id1616861537?l=en-GB
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。you need to create an account first
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/(vip\/info|allSubscriptionStatus)|drive\/v\d\/about\?space) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/PikPakPremium.js

[mitm]
hostname = *.mypikpak.com
*/

const url = $request.url;
let objc = JSON.parse($response.body || '{}');

if (url.includes('/vip/info')) {
  objc.data = objc.data || {};
  objc.data.expire = "2099-09-09T00:00:00+09:00";
  objc.data.status = "ok";
  objc.data.type = "platinum";
  objc.data.vipItem = [
    {
      "status": "ok",
      "expire": "2099-09-09T00:00:00+09:00",
      "type": "regional",
      "description": "Regional members",
      "surplus_day": 747364014
    }
  ];
} else if (url.includes('/about')) {
  objc.quota = objc.quota || {};
  objc.quota.limit = "10999166278790";
  objc.quota.is_unlimited = true;
} else if (url.includes('/allSubscriptionStatus')) {
  objc.apple = {
    "subscribed": true,
    "purchased": true,
    "status": "trial",
    "interval": "year",
    "product": "sub.year",
    "past_due_deadline": "",
    "pay_type": "",
    "region": "regional"
  };
}

$done({ body: JSON.stringify(objc) });
