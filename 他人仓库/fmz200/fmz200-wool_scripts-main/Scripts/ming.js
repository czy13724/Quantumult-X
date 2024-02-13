let obj = JSON.parse($response.body);
obj.data = [];
$done({body: JSON.stringify(obj)});
// Adding a dummy sgmodule commit(2)
