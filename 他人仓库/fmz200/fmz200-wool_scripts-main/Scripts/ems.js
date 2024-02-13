let obj = JSON.parse($response.body);
obj.info.moduleJson = JSON.stringify(JSON.parse(obj.info.moduleJson).filter(item => !item.moduleName.includes("广告")));
$done({body: JSON.stringify(obj)});


























// Adding a dummy stoverride commit(7)
// Adding a dummy sgmodule commit(13)
// Adding a dummy plugin commit(11)
