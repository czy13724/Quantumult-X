let obj = JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});

























// Adding a dummy plugin commit(10)
// Adding a dummy stoverride commit(7)
// Adding a dummy sgmodule commit(13)
