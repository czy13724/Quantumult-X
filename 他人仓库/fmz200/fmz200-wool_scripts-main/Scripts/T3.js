let obj = JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});













// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
// Adding a dummy sgmodule commit(9)
