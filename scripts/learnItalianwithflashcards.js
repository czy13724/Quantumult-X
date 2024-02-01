/*
项目名称：learn Italian with flashcards
作者：Levi
使用说明：先开脚本再重新进入一次应用，即可解锁订阅；未解锁需要点击菜单恢复购买。
下载地址：https://apps.apple.com/app/id1513029876

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/learnItalianwithflashcards.js

[mitm]
hostname = buy.itunes.apple.com
*/

var Levi = JSON.parse($response.body);
Levi= {
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 1513029876,
        "app_item_id": 1513029876,
        "bundle_id": "ru.poas.englishwords.iten",
        "application_version": "2",
        "download_id": 503176118978643772,
        "version_external_identifier": 861464837,
        "receipt_creation_date": "2024-02-01 08:15:57 Etc/GMT",
        "receipt_creation_date_ms": "1706775357000",
        "receipt_creation_date_pst": "2024-02-01 00:15:57 America/Los_Angeles",
        "request_date": "2024-02-01 08:18:33 Etc/GMT",
        "request_date_ms": "1706775513084",
        "request_date_pst": "2024-02-01 00:18:33 America/Los_Angeles",
        "original_purchase_date": "2024-02-01 01:38:54 Etc/GMT",
        "original_purchase_date_ms": "1706751534000",
        "original_purchase_date_pst": "2024-01-31 17:38:54 America/Los_Angeles",
        "original_application_version": "2",
        "in_app": [
            {
                "quantity": "1",
                "product_id": "sub_it_en_12_600",
                "transaction_id": "320001707920481",
                "original_transaction_id": "320001707920481",
                "purchase_date": "2024-02-01 08:15:56 Etc/GMT",
                "purchase_date_ms": "1706775356000",
                "purchase_date_pst": "2024-02-01 00:15:56 America/Los_Angeles",
                "original_purchase_date": "2024-02-01 08:15:57 Etc/GMT",
                "original_purchase_date_ms": "1706775357000",
                "original_purchase_date_pst": "2024-02-01 00:15:57 America/Los_Angeles",
                "expires_date": "2099-03-01 08:34:11 Etc/GMT", 
                "expires_date_ms": "4076008451000", 
                "expires_date_pst": "2099-03-01 00:34:11 America/Los_Angeles", 
                "web_order_line_item_id": "320000795744480",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }
        ]
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "product_id": "sub_it_en_12_600",
            "transaction_id": "320001707920481",
            "original_transaction_id": "320001707920481",
            "purchase_date": "2024-02-01 08:15:56 Etc/GMT",
            "purchase_date_ms": "1706775356000",
            "purchase_date_pst": "2024-02-01 00:15:56 America/Los_Angeles",
            "original_purchase_date": "2024-02-01 08:15:57 Etc/GMT",
            "original_purchase_date_ms": "1706775357000",
            "original_purchase_date_pst": "2024-02-01 00:15:57 America/Los_Angeles",
            "expires_date": "2099-03-01 08:34:11 Etc/GMT",
            "expires_date_ms": "4076008451000",
            "expires_date_pst": "2099-03-01 00:34:11 America/Los_Angeles",
            "web_order_line_item_id": "320000795744480",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20641579"
        }
    ],
    "latest_receipt": "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",
    "pending_renewal_info": [
        {
            "auto_renew_product_id": "sub_it_en_12_600",
            "product_id": "sub_it_en_12_600",
            "original_transaction_id": "320001707920481",
            "auto_renew_status": "1"
        }
    ],
    "status": 0
} ;
$done({body: JSON.stringify(Levi)});
// Adding a dummy change to trigger git commit

// Adding a dummy plugin change to trigger git commit
