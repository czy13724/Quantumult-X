let obj = JSON.parse($response.body);
obj.info.moduleJson = JSON.stringify(JSON.parse(obj.info.moduleJson).filter(item => !item.moduleName.includes("广告")));
$done({body: JSON.stringify(obj)});








































// Adding a dummy plugin commit(15)
// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
