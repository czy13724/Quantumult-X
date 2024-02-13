let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"close\"");
$done({ body: modifiedBody });















// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
