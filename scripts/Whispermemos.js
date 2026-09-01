/*
项目名称： whisper memos
项目作者： Levi
下载地址： https://apps.apple.com/app/id6443658039
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/Whispermemos.js

[mitm]
hostname = api.revenuecat.com
*/

const subData = {
  "store": "app_store",
  "ownership_type": "PURCHASED",
  "is_sandbox": false,
  "original_purchase_date": "2020-03-27T07:52:55Z",
  "purchase_date": "2020-03-27T07:52:54Z",
  "expires_date": "2099-03-27T07:52:54Z"
};

const Levi = {
  "request_date_ms": 1704664060864,
  "request_date": "2024-01-07T21:47:40Z",
  "subscriber": {
    "last_seen": "2024-01-07T21:42:02Z",
    "first_seen": "2024-01-07T21:42:02Z",
    "original_application_version": "1",
    "other_purchases": {},
    "management_url": "https://t.me/plbyjl",
    "subscriptions": {
      "whisper_base_yearly": subData,
      "amber_yearly_discount": subData,
      "whisper_base_monthly": subData,
      "amber_monthly": subData,
      "amber_yearly": subData
    },
    "entitlements": {
      "amber": {
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "product_identifier": "amber_yearly_discount",
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "store": "app_store"
      }
    },
    "original_purchase_date": "2024-01-07T21:38:41Z",
    "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
    "non_subscriptions": {}
  }
};

$done({ body: JSON.stringify(Levi) });
