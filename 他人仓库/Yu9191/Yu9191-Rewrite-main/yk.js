let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"close\"");
$done({ body: modifiedBody });






















// Adding a dummy plugin commit(9)
// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
