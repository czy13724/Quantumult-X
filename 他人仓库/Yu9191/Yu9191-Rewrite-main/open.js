let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"open\"");
$done({ body: modifiedBody });























// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
// Adding a dummy plugin commit(10)
