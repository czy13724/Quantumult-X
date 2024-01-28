/*
项目名称：itranscreen
项目作者：David
下载地址：https://apps.apple.com/us/app/itranscreen-screen-translator/id1663139919
使用说明：显示pro3866即成功，请关闭其他语言类脚本。下载链接请访问本js链接
使用声明：仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32}) url script-request-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/itranscreen.js

[mitm]
hostname = api.revenuecat.com
*/

let obj =  {
"request_date_ms": 1704664060864,
  "request_date": "2024-01-07T21:47:40Z",
  "subscriber": {
    "last_seen": "2024-01-07T21:42:02Z",
    "first_seen": "2024-01-07T21:42:02Z",
    "original_application_version": "1",
    "other_purchases": {
    },
    "management_url": "google.com",
    "subscriptions": {
      "caiyun_10w_1dollar": {
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "expires_date": "2099-03-27T07:52:54Z"
      },
      "rc_0400_1m": {
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "expires_date": "2099-03-27T07:52:54Z"
      },
      "rc_0100_1m": {
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "expires_date": "2099-03-27T07:52:54Z"
      },
      "rc_0200_1m": {
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "expires_date": "2099-03-27T07:52:54Z"
      }
    },
    "entitlements": {
      "pro": {
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "product_identifier": "rc_0200_1m",
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "store": "app_store"
      },
      "pro plus": {
        "ownership_type": "PURCHASED",
        "is_sandbox": false,
        "product_identifier": "rc_0400_1m",
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2020-03-27T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "store": "app_store"
      }
    },
    "original_purchase_date": "2024-01-07T21:38:41Z",
    "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
    "non_subscriptions": {
    }
  }
}

$done({ body: JSON.stringify(obj), status: 200 });


// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit
