/*
项目名称： imprint
项目作者： Levi
下载地址： https://apps.apple.com/app/id1482780647
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/imprint.js

[mitm]
hostname = api.revenuecat.com
*/

const Levi = {
  "request_date_ms": 1707369077835,
  "request_date": "2024-02-08T05:11:17Z",
  "subscriber": {
    "first_seen": "2024-02-08T05:07:10Z",
    "last_seen": "2024-02-08T05:07:11Z",
    "original_application_version": "551",
    "original_purchase_date": "2024-02-08T00:23:24Z",
    "original_app_user_id": "$RCAnonymousID:9022c1c016d04e508c9a66239e89d45d",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "other_purchases": {},
    "subscriptions": {
      "com.polywise.subscriptions.yearly2": {
        "original_purchase_date": "2024-02-08T05:08:58Z",
        "expires_date": "2099-01-27T05:34:02Z",
        "purchase_date": "2024-02-08T05:08:58Z",
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "period_type": "trial",
        "store_transaction_id": "320001715468188"
      }
    },
    "entitlements": {
      "lucid_unlock_all_content": {
        "purchase_date": "2024-02-08T05:08:58Z",
        "product_identifier": "com.polywise.subscriptions.yearly2",
        "expires_date": "2099-01-27T05:34:02Z"
      }
    }
  }
};

$done({ body: JSON.stringify(Levi) });
