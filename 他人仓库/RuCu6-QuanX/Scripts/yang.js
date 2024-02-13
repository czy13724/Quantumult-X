// https://github.com/yangdaozhao/ylgy/blob/master/ylgy.js

let obj = JSON.parse($response.body);

if (obj.blockTypeData) {
  obj.blockTypeData = {};
}

$done({ body: JSON.stringify(obj) });

























// Adding a dummy plugin commit(10)
// Adding a dummy stoverride commit(7)
// Adding a dummy sgmodule commit(13)
