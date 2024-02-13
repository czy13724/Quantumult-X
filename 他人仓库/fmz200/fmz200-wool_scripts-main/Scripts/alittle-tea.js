let obj=JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});
// Adding a dummy sgmodule commit(2)
// Adding a dummy plugin commit(1)
