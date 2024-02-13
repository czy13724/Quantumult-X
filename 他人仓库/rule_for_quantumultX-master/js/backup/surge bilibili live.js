let body = $response.body
body=JSON.parse(body)
body['data']['activity_banner_info']=null
body=JSON.stringify(body)
$done({body})











































// Adding a dummy plugin commit(16)
// Adding a dummy stoverride commit(13)
// Adding a dummy sgmodule commit(19)
