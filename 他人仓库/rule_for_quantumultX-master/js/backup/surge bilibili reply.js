let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})





















































// Adding a dummy stoverride commit(16)
// Adding a dummy sgmodule commit(22)
// Adding a dummy plugin commit(20)
