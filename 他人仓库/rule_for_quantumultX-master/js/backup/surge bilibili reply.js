let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})








































































// Adding a dummy sgmodule commit(28)
// Adding a dummy plugin commit(26)
// Adding a dummy stoverride commit(23)
