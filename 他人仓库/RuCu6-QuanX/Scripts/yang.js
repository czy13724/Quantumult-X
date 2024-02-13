// https://github.com/yangdaozhao/ylgy/blob/master/ylgy.js

let obj = JSON.parse($response.body);

if (obj.blockTypeData) {
  obj.blockTypeData = {};
}

$done({ body: JSON.stringify(obj) });




// Adding a dummy stoverride commit(1)

// Adding a dummy plugin commit(3)
// Adding a dummy sgmodule commit(5)
