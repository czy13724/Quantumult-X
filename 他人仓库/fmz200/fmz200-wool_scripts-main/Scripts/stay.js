let new_body = JSON.parse($response.body);
if (new_body.biz) {
  new_body.biz = Object.values(new_body.biz).filter(item => !(item["type"] == "promoted"));
}
$done({body: JSON.stringify(new_body)});

















































// Adding a dummy plugin commit(18)
// Adding a dummy stoverride commit(15)
// Adding a dummy sgmodule commit(21)
