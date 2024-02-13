let obj=JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});






























// Adding a dummy sgmodule commit(14)
// Adding a dummy plugin commit(12)
// Adding a dummy stoverride commit(9)
