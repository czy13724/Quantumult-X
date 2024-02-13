let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})
















































// Adding a dummy sgmodule commit(20)
// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
