

var body = $response.body.replace(/msg":".*?"/g,'msg":"ok"')
.replace(/code":\d+/g,'code":200')
.replace(/server":"\d+"/g,'server":"1"')
$done({ body });








// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
// Adding a dummy sgmodule commit(6)
