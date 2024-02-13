let obj = JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});



// Adding a dummy plugin commit(2)
// Adding a dummy stoverride commit(1)
// Adding a dummy sgmodule commit(4)
