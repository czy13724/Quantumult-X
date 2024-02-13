let u = $request.url;
let i = JSON.parse($response.body);
if (u.includes("list-app-m.i4.cn")) {
  i.app && (i.app=[])
}
	i.adli && (i.adli=[])
	i.list && (i.list= [])
	i.ad && (i.ad = []);
$done({body: JSON.stringify(i)});


































// Adding a dummy plugin commit(13)
// Adding a dummy stoverride commit(10)
// Adding a dummy sgmodule commit(16)
