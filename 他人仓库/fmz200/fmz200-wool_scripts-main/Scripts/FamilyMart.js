let obj=JSON.parse($response.body);
delete obj.data.topBanner ;
$done({body: JSON.stringify(obj)});
// Adding a dummy sgmodule commit(1)
