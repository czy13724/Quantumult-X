let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"close\"");
$done({ body: modifiedBody });













// Adding a dummy plugin commit(6)
// Adding a dummy stoverride commit(3)
// Adding a dummy sgmodule commit(9)
