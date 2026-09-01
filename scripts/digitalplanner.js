/*
项目名称： digitalplanner
项目作者： Levi
下载地址： https://apps.apple.com/app/id1632352471
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/digitalplanner.js

[mitm]
hostname = buy.itunes.apple.com
*/

const receiptInfo = {
  "quantity": "1",
  "product_id": "com.softwings.DigitalPlanner.2months",
  "transaction_id": "320001708141986",
  "original_transaction_id": "320001708141986",
  "purchase_date": "2024-02-01 12:46:05 Etc/GMT",
  "purchase_date_ms": "1706791565000",
  "purchase_date_pst": "2024-02-01 04:46:05 America/Los_Angeles",
  "original_purchase_date": "2024-02-01 12:46:06 Etc/GMT",
  "original_purchase_date_ms": "1706791566000",
  "original_purchase_date_pst": "2024-02-01 04:46:06 America/Los_Angeles",
  "expires_date": "2099-03-01 08:34:11 Etc/GMT",
  "expires_date_ms": "4076008451000",
  "expires_date_pst": "2099-03-01 00:34:11 America/Los_Angeles",
  "web_order_line_item_id": "320000795858074",
  "is_trial_period": "true",
  "is_in_intro_offer_period": "false",
  "in_app_ownership_type": "PURCHASED",
  "subscription_group_identifier": "20973421"
};

const Levi = {
  "environment": "Production",
  "status": 0,
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1632352471,
    "app_item_id": 1632352471,
    "bundle_id": "com.softwings.DigitalPlanner",
    "application_version": "137",
    "download_id": 503176157593425000,
    "version_external_identifier": 861895945,
    "receipt_creation_date": "2024-02-01 12:46:06 Etc/GMT",
    "receipt_creation_date_ms": "1706791566000",
    "receipt_creation_date_pst": "2024-02-01 04:46:06 America/Los_Angeles",
    "request_date": "2024-02-01 12:46:08 Etc/GMT",
    "request_date_ms": "1706791568849",
    "request_date_pst": "2024-02-01 04:46:08 America/Los_Angeles",
    "original_purchase_date": "2024-02-01 01:48:07 Etc/GMT",
    "original_purchase_date_ms": "1706752087000",
    "original_purchase_date_pst": "2024-01-31 17:48:07 America/Los_Angeles",
    "original_application_version": "137",
    "in_app": [receiptInfo]
  },
  "latest_receipt_info": [receiptInfo],
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.softwings.DigitalPlanner.2months",
      "product_id": "com.softwings.DigitalPlanner.2months",
      "original_transaction_id": "320001708141986",
      "auto_renew_status": "1"
    }
  ]
};

$done({ body: JSON.stringify(Levi) });
