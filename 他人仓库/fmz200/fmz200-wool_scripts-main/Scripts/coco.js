let obj=JSON.parse($response.body);
delete obj.data.top_background_url ;
delete obj.data.bottom_banner_list ;
$done({body: JSON.stringify(obj)});
































// Adding a dummy stoverride commit(9)
// Adding a dummy sgmodule commit(15)
// Adding a dummy plugin commit(13)
