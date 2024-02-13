let obj=JSON.parse($response.body);
delete obj.data.homeButtonList ;
delete obj.data.dysmorphismPictureList ;
$done({body: JSON.stringify(obj)});



















































// Adding a dummy sgmodule commit(21)
// Adding a dummy plugin commit(19)
// Adding a dummy stoverride commit(16)
