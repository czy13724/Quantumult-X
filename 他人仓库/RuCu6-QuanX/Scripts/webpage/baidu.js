let rHead = "<head>";
let newStyle =
  "<head><style> .wpoScript, .ec_ad_results, .ec_wise_ad, .page-copyright, .c-line-clamp1{display:none!important} </style>";
let body = $response.body.replace(rHead, newStyle);
$done({ body });




























// Adding a dummy plugin commit(11)
// Adding a dummy stoverride commit(8)
// Adding a dummy sgmodule commit(14)
