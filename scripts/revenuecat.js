/*
项目名称： revenuecat合集
项目作者： Levi
下载地址： https://apps.apple.com/app/id6448364347
使用说明： 远程引用（每一个下载地址对应一个UAMappings）
Currency Converter Calculator：https://apps.apple.com/app/id6448364347
使用声明： ⚠️仅供参考，🈲️转载与售卖！

[rewrite_local]
# 修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/revenuecat.js
# 清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/revenuecat.js

[mitm]
hostname = api.revenuecat.com
*/

const Q = {};
const Q1 = JSON.parse((typeof $response !== "undefined" && $response.body) || null);

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};

  for (const key in $request.headers) {
    const reg = /^[a-z]+$/;
    if (key === "User-Agent" && !reg.test(key)) {
      const lowerkey = key.toLowerCase();
      $request.headers[lowerkey] = $request.headers[key];
      delete $request.headers[key];
    }
  }

  const UA = $request.headers['user-agent'];
  const UAMappings = {
    'Currency%20Converter%20Calculator/66': { name: 'Premium', id: 'currency_converter_life_time_pro' },
  };

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2023-09-01T11:00:00Z",
    "purchase_date": "2023-09-01T11:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      Q1.subscriber.subscriptions = {};
      Q1.subscriber.subscriptions[id] = data;
      Q1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      Q1.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }

  Q.body = JSON.stringify(Q1);
}

$done(Q);
