/*
2022-05-28
*/

var body = $response.body
  .replace(
    /<head>/,
    '<head><link rel="stylesheet" href="https://gitlab.com/RuCu6/QuanX/-/raw/main/Css/zhenbuka.css" type="text/css">'
  )
  .replace(/'6572'/g, "'6578'");
$done({ body });











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
