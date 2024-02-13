// https://github.com/yangdaozhao/ylgy/blob/master/ylgy.js

let obj = JSON.parse($response.body);

if (obj.blockTypeData) {
  obj.blockTypeData = {};
}

$done({ body: JSON.stringify(obj) });









// Adding a dummy stoverride commit(2)
// Adding a dummy sgmodule commit(6)
// Adding a dummy plugin commit(5)
