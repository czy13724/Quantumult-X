/*
项目名称：Timus
项目作者：Levi
下载地址：https://apps.apple.com/app/id6461119151
使用说明：无
使用声明：仅供个人参考学习交流，勿用于其它用途


[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/Timus.js

[Mitm]
hostname = api.revenuecat.com
  
*/

var Levi = JSON.parse($response.body);
Levi= {
  "request_date_ms" : 1706073444478,
  "request_date" : "2024-01-24T05:17:24Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-01-23T00:09:49Z",
    "original_application_version" : "27",
    "other_purchases" : {

    },
    "management_url" : "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions" : {
      "timus_999_1y_3d0" : {
        "original_purchase_date" : "2024-01-24T05:17:20Z",
        "expires_date" : "2099-01-27T05:17:19Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "320001699296977",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-01-24T05:17:19Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-24T05:17:19Z",
        "product_identifier" : "timus_999_1y_3d0",
        "expires_date" : "2099-01-27T05:17:19Z"
      }
    },
    "original_purchase_date" : "2024-01-23T00:09:15Z",
    "original_app_user_id" : "$RCAnonymousID:a1c7981ab3ce4d058397a27f2594ccf8",
    "last_seen" : "2024-01-24T03:29:08Z"
  }
};
$done({body : JSON.stringify(Levi)});
