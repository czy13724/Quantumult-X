/******************************
GUGA （ipad）
***********************

[rewrite_local]
^https?:\/\/www\.guga\.co\/api-base\/v2\/(state|preferential-product) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/GUGA.js



[mitm]
hostname = www.guga.co

*******************************/
var body = $response.body;
var data = JSON.parse(body); 
data.data.level = 1;  
data.data.expire = 1; 
body = JSON.stringify(data);
$done(body);


































































// Adding a dummy sgmodule commit(26)
// Adding a dummy plugin commit(24)
// Adding a dummy stoverride commit(21)
