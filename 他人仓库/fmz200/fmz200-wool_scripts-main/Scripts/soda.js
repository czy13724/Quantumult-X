let obj = JSON.parse($response.body);
obj.data.objects.forEach(item => {
  item.imageUrl = "https://raw.githubusercontent.com/fmz200/wool_scripts/main/pic/rewrite/warm_water.png";
});
$done({body: JSON.stringify(obj)});

























// Adding a dummy plugin commit(10)
// Adding a dummy stoverride commit(7)
// Adding a dummy sgmodule commit(13)
