/*
项目名称：cereal-translator
作者：David
使用说明：先开脚本再重新进入，未成功点击recharge栏恢复。
下载地址：https://apps.apple.com/us/app/cereal-translator/id6466264767

[rewrite_local]
^https:\/\/youxifanyizhushou\.com\/ios\/api\/product\/user\/remain\/ios$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/CerealTrans.js

[mitm]
hostname = youxifanyizhushou.com
*/

var objc = JSON.parse($response.body);
objc.data.forEach(item => {
  item.times = 20000;
  item.targetProductId = "mp_subscription_level_30";
  item.expireDay = 99999;
 item.premium = true;
  item.productId = 32;
  item.expireTime = "2080-02-29 12:54:58";
  item.level = 3;
});
objc.code = 0;
objc.data.forEach(item => {
  item.productPayType = "Apple";
});
$done({ body: JSON.stringify(objc) });

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy plugin change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit
