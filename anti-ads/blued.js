# blued男同软件去广告
# author: Sliverkiss

[rewrite_local]
//主页推荐直播 
https://social.blued.cn/users/recommend url reject-dict

//未登录时个人界面广告
^https:\/\/social\.blued\.cn\/users\/no_auth\/benefit url reject-dict

//登录后个人界面广告 
^https:\/\/social\.blued\.cn\/users\/.+\/more\/ios\?v=2 url script-response-body blued.js 

[mitm]
hostname=social.blued.cn

//blued脚本内容 
let chxm1023 = JSON.parse($response.body);
chxm1023.data[0].banner={};
chxm1023.data[0].service=[];
chxm1023.data[0].healthy={};
chxm1023.data[0].healthy_banner=[];
chxm1023.data[0].emotions=[];
$done({
  body: JSON.stringify(chxm1023)
});
