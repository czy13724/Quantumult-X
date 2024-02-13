let body = $response.body;
let modifiedBody = body.replace(/"switch":".*?"/g, "\"switch\":\"open\"");
$done({ body: modifiedBody });




// Adding a dummy stoverride commit(1)

// Adding a dummy plugin commit(3)
// Adding a dummy sgmodule commit(5)
