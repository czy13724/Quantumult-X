let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
$done({body: JSON.stringify(obj)});












// Adding a dummy sgmodule commit(8)
// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
