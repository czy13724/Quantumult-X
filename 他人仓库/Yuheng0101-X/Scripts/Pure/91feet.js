var body = $response.body
if (/html>/.test(body)) {
    body = body.replace(/<head>/, '<head><style>#o63092,#o63093,.touchy-wrapper,#simple-banner,.happy-header-mobile,.happy-under-player-mobile,#sidebar,.happy-footer-mobile{display:none!important;}</style>')
    $done({ body })
} else {
    $done()
}















// Adding a dummy sgmodule commit(9)
// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
