var body = $response.body.replace(/"free":\w+/g,'"free":true')

$done({ body });

// Adding a dummy plugin commit(1)
// Adding a dummy sgmodule commit(3)
