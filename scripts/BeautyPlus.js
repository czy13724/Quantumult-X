/************************
// Quantumult X引用地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/BeautyPlus.js
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Surge/BeautyPlus.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Loon/BeautyPlus.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Stash/BeautyPlus.stoverride

[rewrite_local]
https:\/\/(api\.mr\.pixocial\.com\/v1\/manual_unlock|newbeee-api\.beautyplus\.com\/api\/v1\/asset\/balance) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/BeautyPlus.js

[mitm]
hostname = api.mr.pixocial.com, newbeee-api.beautyplus.com

*****************************/


var objc = JSON.parse($response.body);

    objc = {
  
 "vip_expires_date": 3000330150,
"message": "success",
  "data": {
    "points": 999999999,
    "next_claim": 1,
    "gid": "2641810920",
    "balance": 999999999,
    "created_at": 1707331696
},
}

$done({body : JSON.stringify(objc)});
// Adding a dummy stoverride change to trigger git commit

// Adding a dummy sgmodule change to trigger git commit
