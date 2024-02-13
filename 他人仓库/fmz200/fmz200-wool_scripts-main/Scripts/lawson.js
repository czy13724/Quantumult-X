let obj=JSON.parse($response.body);
delete obj.data.homeButtonList ;
delete obj.data.dysmorphismPictureList ;
$done({body: JSON.stringify(obj)});


































// Adding a dummy plugin commit(13)
// Adding a dummy stoverride commit(10)
// Adding a dummy sgmodule commit(16)
