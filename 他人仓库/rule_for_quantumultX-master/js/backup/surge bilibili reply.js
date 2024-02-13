let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})










































// Adding a dummy sgmodule commit(18)
// Adding a dummy plugin commit(16)
// Adding a dummy stoverride commit(13)
