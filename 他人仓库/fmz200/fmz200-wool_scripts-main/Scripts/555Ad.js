
let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});






















// Adding a dummy plugin commit(9)
// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
