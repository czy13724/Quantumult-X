let obj = JSON.parse($response.body);
obj.data.sections = obj.data.sections.filter(item => ["center_v2", "head_v2", "core_function"].includes(item.sectionId));
$done({body: JSON.stringify(obj)});








































// Adding a dummy plugin commit(15)
// Adding a dummy stoverride commit(12)
// Adding a dummy sgmodule commit(18)
