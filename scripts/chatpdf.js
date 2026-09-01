/*
项目名称： chatpdf
项目作者： Levi
下载地址： https://apps.apple.com/app/id6457365457
使用说明： 无
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/chatpdf.js

[mitm]
hostname = api.revenuecat.com
*/

const Levi = {
  "request_date_ms": 1706074455134,
  "request_date": "2024-01-24T05:34:15Z",
  "subscriber": {
    "first_seen": "2024-01-23T00:10:47Z",
    "last_seen": "2024-01-24T03:29:23Z",
    "original_application_version": "89",
    "original_purchase_date": "2024-01-23T00:09:25Z",
    "original_app_user_id": "1FPKzIIgxMdhhSwfQ3xavh0FmBQ2",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "other_purchases": {},
    "subscriptions": {
      "chatpdf_annual_2": {
        "original_purchase_date": "2024-01-24T05:34:03Z",
        "expires_date": "2099-01-27T05:34:02Z",
        "purchase_date": "2024-01-24T05:34:02Z",
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "period_type": "trial",
        "store_transaction_id": "320001699307998"
      }
    },
    "entitlements": {
      "premium": {
        "purchase_date": "2024-01-24T05:34:02Z",
        "product_identifier": "chatpdf_annual_2",
        "expires_date": "2099-01-27T05:34:02Z"
      }
    }
  }
};

$done({ body: JSON.stringify(Levi) });
