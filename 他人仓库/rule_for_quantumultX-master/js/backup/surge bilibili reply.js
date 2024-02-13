let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})














































// Adding a dummy plugin commit(17)
// Adding a dummy stoverride commit(14)
// Adding a dummy sgmodule commit(20)
