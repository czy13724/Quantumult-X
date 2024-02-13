let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})










































































// Adding a dummy stoverride commit(23)
// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
