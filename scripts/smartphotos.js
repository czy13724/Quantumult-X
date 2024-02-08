










// Quantumult X引用地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/smartphotos.js
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Surge/smartphotos.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Loon/smartphotos.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Stash/smartphotos.stoverride

/*
项目名称： smartphotos 相册助手
项目作者： Levi
下载地址： https://apps.apple.com/app/id1574004980
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/smartphotos.js

[mitm]
hostname = buy.itunes.apple.com
*/

var Levi = JSON.parse($response.body);
Levi= {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 1574004980,
    "receipt_creation_date": "2024-02-06 11:25:03 Etc\/GMT",
    "bundle_id": "com.panda.smartphotos",
    "original_purchase_date": "2024-02-06 11:23:03 Etc\/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1707218702000",
        "expires_date": "2099-03-01 08:34:11 Etc\/GMT",
        "expires_date_pst": "2099-03-01 00:34:11 America\/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "320001713629167",
        "is_trial_period": "true",
        "original_transaction_id": "320001713629167",
        "purchase_date": "2024-02-06 11:25:02 Etc\/GMT",
        "product_id": "smartphotos.premium.year.a",
        "original_purchase_date_pst": "2024-02-06 03:25:03 America\/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1707218703000",
        "web_order_line_item_id": "320000798521154",
        "expires_date_ms": "4076008451000",
        "purchase_date_pst": "2024-02-06 03:25:02 America\/Los_Angeles",
        "original_purchase_date": "2024-02-06 11:25:03 Etc\/GMT"
      }
    ],
    "adam_id": 1574004980,
    "receipt_creation_date_pst": "2024-02-06 03:25:03 America\/Los_Angeles",
    "request_date": "2024-02-06 11:25:07 Etc\/GMT",
    "request_date_pst": "2024-02-06 03:25:07 America\/Los_Angeles",
    "version_external_identifier": 852934322,
    "request_date_ms": "1707218707286",
    "original_purchase_date_pst": "2024-02-06 03:23:03 America\/Los_Angeles",
    "application_version": "8",
    "original_purchase_date_ms": "1707218583000",
    "receipt_creation_date_ms": "1707218703000",
    "original_application_version": "8",
    "download_id": 503191464425983574
  },
  "pending_renewal_info": [
    {
      "product_id": "smartphotos.premium.year.a",
      "original_transaction_id": "320001713629167",
      "auto_renew_product_id": "smartphotos.premium.year.a",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1707218702000",
      "expires_date": "2099-03-01 08:34:11 Etc\/GMT",
      "expires_date_pst": "2099-03-01 00:34:11 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "320001713629167",
      "is_trial_period": "true",
      "original_transaction_id": "320001713629167",
      "purchase_date": "2024-02-06 11:25:02 Etc\/GMT",
      "product_id": "smartphotos.premium.year.a",
      "original_purchase_date_pst": "2024-02-06 03:25:03 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20833117",
      "original_purchase_date_ms": "1707218703000",
      "web_order_line_item_id": "320000798521154",
      "expires_date_ms": "4076008451000",
      "purchase_date_pst": "2024-02-06 03:25:02 America\/Los_Angeles",
      "original_purchase_date": "2024-02-06 11:25:03 Etc\/GMT"
    }
  ],
  "latest_receipt": "MIIUrgYJKoZIhvcNAQcCoIIUnzCCFJsCAQExCzAJBgUrDgMCGgUAMIID7AYJKoZIhvcNAQcBoIID3QSCA9kxggPVMAoCARQCAQEEAgwAMAsCAQMCAQEEAwwBODALAgETAgEBBAMMATgwCwIBGQIBAQQDAgEDMAwCAQoCAQEEBBYCNCswDAIBDgIBAQQEAgIBCzANAgENAgEBBAUCAwJzWTAOAgEBAgEBBAYCBF3RaPQwDgIBCQIBAQQGAgRQMzAyMA4CAQsCAQEEBgIEBwfqGTAOAgEQAgEBBAYCBDLWvrIwEgIBDwIBAQQKAggG+7H4ix6OVjAUAgEAAgEBBAwMClByb2R1Y3Rpb24wGAIBBAIBAgQQal80enYxLdfggpBZx66mWDAcAgEFAgEBBBT6eSjAw\/fDIEoUJD3sbsaDUAlVIjAeAgEIAgEBBBYWFDIwMjQtMDItMDZUMTE6MjU6MDNaMB4CAQwCAQEEFhYUMjAyNC0wMi0wNlQxMToyNTowN1owHgIBEgIBAQQWFhQyMDI0LTAyLTA2VDExOjIzOjAzWjAfAgECAgEBBBcMFWNvbS5wYW5kYS5zbWFydHBob3RvczBSAgEHAgEBBEpGJkyqPAZ8prWJCIsfv3Yx0UuqV1KY7dGrT4k02troHGpnPVVgVCemTAWy\/lfMVez19Jt5e7qM5bbJqR0M+nTnegb5EkyCLT3E7TBkAgEGAgEBBFxMsS7X59g59Fdr3xA2wjSphgVuZzLANIL1kmAwmzQZFBBTeJi7Q+3Frw1i9LVtG0jQ5\/HSKrbTiDBHu7cozMLoYLfHLeEbt7UoNmcE7TeZb80XUluk+3s91SonRzCCAZYCARECAQEEggGMMYIBiDALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAMAgIGugIBAQQDAgEAMA8CAgauAgEBBAYCBF3SYU0wEgICBq8CAQEECQIHASMJ\/ex3QjAaAgIGpwIBAQQRDA8zMjAwMDE3MTM2MjkxNjcwGgICBqkCAQEEEQwPMzIwMDAxNzEzNjI5MTY3MB8CAgaoAgEBBBYWFDIwMjQtMDItMDZUMTE6MjU6MDJaMB8CAgaqAgEBBBYWFDIwMjQtMDItMDZUMTE6MjU6MDNaMB8CAgasAgEBBBYWFDIwMjQtMDItMDlUMTE6MjU6MDJaMCUCAgamAgEBBBwMGnNtYXJ0cGhvdG9zLnByZW1pdW0ueWVhci5hoIIO4jCCBcYwggSuoAMCAQICEFj3uuTCgkELJ9ZWfVGAqPEwDQYJKoZIhvcNAQEFBQAwdTELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAsMAkc4MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0yMzA3MTMxODIxMTlaFw0yNDA4MTExODMxMTlaMIGJMTcwNQYDVQQDDC5NYWMgQXBwIFN0b3JlIGFuZCBpVHVuZXMgU3RvcmUgUmVjZWlwdCBTaWduaW5nMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC+VB3z7eQJ0sQx+gdgn+BdV0uiAR1ovHQyyBcnDpLnqJRjXbQIGuhp6dsAj1aFWEQ7R0gvYl8qfF0+rqKVKrFW\/j6ZmGRBC8cKzGeLt3kfQLJtVuj8We3CWtGho4S3c7JhMWiGZYcqQzsFJN1ULiawO54zTAZWdsLRaRER8mOiVZpGl1VyRj+G+FFU9xNRk9LQ2o28S2ILJeo+ypqQhHUdxTdMm2BGI6CuXXsI6aJ9l83G6cUVYaTTrwDZaPqI3bjcO3Mw9Ni\/m1hyTAKg0ATTKLiZWVoyt4qFLF8FxGzh5rF8j94SROZHjv9et6uTv5ZAZB5JZb4EkmmdXawec+fvAgMBAAGjggI7MIICNzAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFLW9vIDEDOM4pPS3rSOz70TOuVqFMHAGCCsGAQUFBwEBBGQwYjAtBggrBgEFBQcwAoYhaHR0cDovL2NlcnRzLmFwcGxlLmNvbS93d2RyZzguZGVyMDEGCCsGAQUFBzABhiVodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHJnODAxMIIBHwYDVR0gBIIBFjCCARIwggEOBgoqhkiG92NkBQYBMIH\/MDcGCCsGAQUFBwIBFitodHRwczovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDAGA1UdHwQpMCcwJaAjoCGGH2h0dHA6Ly9jcmwuYXBwbGUuY29tL3d3ZHJnOC5jcmwwHQYDVR0OBBYEFAKyO1MbjfGUC7geyL704yvGxn1EMA4GA1UdDwEB\/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAQgAKIWHXRTIK5WQ45gIm8E\/K0IfL3+kzuQ6gYrWSg3\/Lxst8BICDQvfNmcqWXkPeDE5cXviUmoF6lf\/Icb4hbdHNDjkI4T5d7wb6E2tF5zHFFlR4OqptfdD0Da2zb6zGqxsyM7gYs\/LK9BP5dO\/D0xr3VMPnpMZjfhnyK+NOGyDDzu4Hhr9M4dwiGZqJdbuODE9v\/loYy\/RJScTwF+nKD\/TKGYP3aziLIgxj5ygRldGs9W7Vz6y3SaZ0khqjTS9n8xdf\/ix0cEfrLHws9ENodZ2Mrgi\/osk2Sfa9+7H6fhVUmbBUvdDQUX+\/a1MMxXqRbyocqqoBXAW\/ndNiK8VgeTCCBFUwggM9oAMCAQICFFS1C695DY1\/jK9oTFYvUGkKGrpfMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0yMzA2MjAyMzM3MTVaFw0yNTAxMjQwMDAwMDBaMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHODFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDQQBDUCPlSIWNPPGj31JyCAoyDaLy3jX+I50JNLO8ipcKJ3r0M101hUC055DBzpdLVaJoz8u\/ZKq0uHwO6+KXxQgtXLkbG0FjTcF\/3sjfvah8+v4k5wq3+9QX7WJYxyIcs1SO6dbAs9auguvIgDEzrJGNp6SJA8I5YW95ke4kbURIE4BeyWc3f8efOrywy6GnB0Ah+HaJHc9FLO\/25hdxHpyiCeSlIiQIo4sHsLB9bhvzYtstxwHMBS\/wFERFsAQM0WvaBwl4ffBQO3j9rIctP9ddh5oQDkrznJSmezVsMwdvjxDrZdlesLzgUGci3saJVT19OjhlZqdr9ctqwBCEFAgMBAAGjge8wgewwEgYDVR0TAQH\/BAgwBgEB\/wIBADAfBgNVHSMEGDAWgBQr0GlHlHYJ\/vRrjS5ApvdHTX8IXjBEBggrBgEFBQcBAQQ4MDYwNAYIKwYBBQUHMAGGKGh0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtYXBwbGVyb290Y2EwLgYDVR0fBCcwJTAjoCGgH4YdaHR0cDovL2NybC5hcHBsZS5jb20vcm9vdC5jcmwwHQYDVR0OBBYEFLW9vIDEDOM4pPS3rSOz70TOuVqFMA4GA1UdDwEB\/wQEAwIBBjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEATLPrejmUSpVm+hYx6g2Kj11COMYHzejJIqz8CEJ+X5NfMSqoIsF2GSvurnLpvVbPSSSSCPfNGXXD+RonDQ7cKY0\/ttulT0xyxGCRiRF+JJVDImBnvN\/\/q+U8FhedghROnfR1\/lC5rQWyuHn2ldYQ5fZT9M8j5ncP7LhLafjingIx2Y7Zyr5jXl\/hoGnOwc1uSaN4Ya85PGpLCjQlZNUwtTyr3RGBOXHowMNYgBEQGhHSwrxZ8IrZNXPA5m3kyX1iFD6CAqkQaTd5YW\/wRpQ+NfWrrGPQ2F5ZV2nRuEtuXdRfE5xwTiUR3CQsHhaelloE7UXuOu5nXY\/DhrD1TB9oEDCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN\/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm\/IlA7pVj01dDfFkNSMVSxVZHbOU9\/acns9QusFYUGePCLQg98usLCBvcLY\/ATCMt0PPD5098ytJKBrI\/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs\/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP\/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH\/BAQDAgEGMA8GA1UdEwEB\/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME\/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr\/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q\/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy\/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ\/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAbEwggGtAgEBMIGJMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHODFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkCEFj3uuTCgkELJ9ZWfVGAqPEwCQYFKw4DAhoFADANBgkqhkiG9w0BAQEFAASCAQCLtk5itsuK1LV6oqLfWg2pSVS7SLnCPfgx6OTdySB\/T6+WdgYNdPEmiOer3y\/DrpLkFyqWEUn\/Xo5dSiMnJO3eNAQSfcrtuouhgWOR+MkC\/+1t4U3jBM\/eCaqZIWhChqBgYBgJWiRIk0cngLqQdbfBmXvSSEKHk4ZPl\/APOzdPzKB0kvdFQQtb51zxhlgvdMjvXfkeN29O8nnn+oee+4KjIQEjCDwaBnUe4AKKlZztuA+6aPxrGEDVy8AReV1\/FWRXCHf+xy5km1gUfPk1ebKf0\/OdmrCauvm7F8fIlckCRf49\/rg+HPNT\/ZQagXvxcrxscfD2OZiv2wLJ5cWLiJ1\/"
};
     
$done({body: JSON.stringify(Levi)});
// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit
