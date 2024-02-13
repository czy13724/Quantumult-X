let obj = JSON.parse($response.body);
obj.info.moduleJson = JSON.stringify(JSON.parse(obj.info.moduleJson).filter(item => !item.moduleName.includes("广告")));
$done({body: JSON.stringify(obj)});




















































// Adding a dummy plugin commit(19)
// Adding a dummy stoverride commit(16)
// Adding a dummy sgmodule commit(22)
