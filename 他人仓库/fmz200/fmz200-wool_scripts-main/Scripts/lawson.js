let obj=JSON.parse($response.body);
delete obj.data.homeButtonList ;
delete obj.data.dysmorphismPictureList ;
$done({body: JSON.stringify(obj)});
// Adding a dummy sgmodule commit(1)
// Adding a dummy plugin commit(1)
