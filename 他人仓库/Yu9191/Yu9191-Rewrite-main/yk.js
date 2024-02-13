let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"close\"");
$done({ body: modifiedBody });
// Adding a dummy sgmodule commit(2)
// Adding a dummy plugin commit(1)
