let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})






















// Adding a dummy plugin commit(9)
// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
