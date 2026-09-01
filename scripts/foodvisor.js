/*
项目名称： Foodvisor
项目作者： Levi
下载地址： https://apps.apple.com/app/id1064020872
使用说明： 先开脚本再打开软件，未成功尝试恢复购买。下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，禁止用于商业用途。

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/foodvisor.js

[mitm]
hostname = api.revenuecat.com
*/

const entData = {
  "purchase_date": "2024-02-02T08:10:06Z",
  "product_identifier": "com.foodvisor.Foodvisor.14free1year",
  "expires_date": "2099-02-18T07:52:54Z"
};

const Levi = {
  "request_date": "2024-02-02T08:10:11Z",
  "request_date_ms": 1706861411911,
  "subscriber": {
    "first_seen": "2024-02-02T07:59:19Z",
    "last_seen": "2024-02-02T08:01:20Z",
    "original_application_version": "10409",
    "original_purchase_date": "2024-02-02T07:58:29Z",
    "original_app_user_id": "$RCAnonymousID:1d408cd6b1784008a64f98ae389b6f92",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "other_purchases": {},
    "subscriptions": {
      "com.foodvisor.Foodvisor.14free1year": {
        "original_purchase_date": "2024-02-02T08:10:07Z",
        "expires_date": "2099-02-18T07:52:54Z",
        "purchase_date": "2024-02-02T08:10:06Z",
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "period_type": "trial",
        "store_transaction_id": "320001709080880"
      }
    },
    "entitlements": {
      "recipe": entData,
      "journal": entData,
      "chat": entData,
      "nutritional_facts": entData,
      "coaching": entData,
      "daily_assessment": entData,
      "diet_article": entData
    }
  }
};

$done({ body: JSON.stringify(Levi) });
