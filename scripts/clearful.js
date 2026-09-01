/*
项目名称： clearful
项目作者： Levi
下载地址： https://apps.apple.com/app/id1513257639
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/clearful.js

[mitm]
hostname = api.revenuecat.com
*/

const Levi = {
  "request_date_ms": 1707373030982,
  "request_date": "2024-02-08T06:17:10Z",
  "subscriber": {
    "first_seen": "2024-02-08T06:15:20Z",
    "last_seen": "2024-02-08T06:15:28Z",
    "original_application_version": "171",
    "original_purchase_date": "2024-02-08T06:15:48Z",
    "original_app_user_id": "$RCAnonymousID:2b0340e9f11e42088c1c4d431ea3db52",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "other_purchases": {},
    "subscriptions": {
      "cjd_4_8999_1y_1w0": {
        "original_purchase_date": "2024-02-08T06:15:48Z",
        "expires_date": "2099-01-27T05:34:02Z",
        "purchase_date": "2024-02-08T06:15:47Z",
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "period_type": "trial",
        "store_transaction_id": "320001715523896"
      }
    },
    "entitlements": {
      "pro": {
        "purchase_date": "2024-02-08T06:15:47Z",
        "product_identifier": "cjd_4_8999_1y_1w0",
        "expires_date": "2099-01-27T05:34:02Z"
      }
    }
  }
};

$done({ body: JSON.stringify(Levi) });
