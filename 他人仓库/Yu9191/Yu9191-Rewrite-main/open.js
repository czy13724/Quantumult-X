let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"open\"");
$done({ body: modifiedBody });





// Adding a dummy sgmodule commit(4)
// Adding a dummy plugin commit(3)
// Adding a dummy stoverride commit(2)
