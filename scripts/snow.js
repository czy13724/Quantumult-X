/*
项目名称： SNOW-Ai写真  +  EPIK AI 两个软件
项目作者： David
下载地址： https://apps.apple.com/us/app/snow-ai-profile/id1022267439?l=en-GB
使用说明： 
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https:\/\/user-snow-api\.snow\.me\/v1\/purchase\/subscription\/subscriber\/status$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/snow.js

[mitm]
hostname = *.snow.me
*/

if ($response.body) {
  const mgmdev = JSON.parse($response.body);
  const url = $request.url;
  let ids = "com.campmobile.snow.subscribe.oneyear";

  if (url.includes('EPIK')) {
    ids = "com.snowcorp.epik.subscribe.plan.oneyear";
  }

  if (mgmdev.result && Array.isArray(mgmdev.result.products)) {
    mgmdev.result.products.forEach(product => {
      product.productId = ids;
    });
    mgmdev.result.activated = true;
  }

  $done({ body: JSON.stringify(mgmdev) });
} else {
  $done({});
}
