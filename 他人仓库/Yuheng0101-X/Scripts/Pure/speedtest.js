let body = $response.body
    .replace(/<head>/, '<head><style>.right,.speed_start_top_wrap{opacity:0!important;}.speed-rocket-container,.footer>.item:nth-child(2),.footer>.item:nth-child(3),tools-banner{display:none!important;}.footer>.item{width:auto!important;}.footer>.item a{background-position:top center!important;}</style>')
$done({ body });