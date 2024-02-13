let obj=JSON.parse($response.body);
delete obj.data.ad ;
delete obj.data.brands ;
delete obj.data.info.infos ;
$done({body: JSON.stringify(obj)});










































































// Adding a dummy stoverride commit(23)
// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
