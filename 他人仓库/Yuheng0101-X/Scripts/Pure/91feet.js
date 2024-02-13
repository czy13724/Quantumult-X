var body = $response.body
if (/html>/.test(body)) {
    body = body.replace(/<head>/, '<head><style>#o63092,#o63093,.touchy-wrapper,#simple-banner,.happy-header-mobile,.happy-under-player-mobile,#sidebar,.happy-footer-mobile{display:none!important;}</style>')
    $done({ body })
} else {
    $done()
}

































































// Adding a dummy stoverride commit(20)
// Adding a dummy sgmodule commit(26)
// Adding a dummy plugin commit(24)
