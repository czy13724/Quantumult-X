// @timestamp thenkey 2023-11-22 22:37:14
let a=$request.url,e=$response.body;if(a.includes("interface/sdk/sdkad.php"))try{let a=JSON.parse(e.substring(0,e.length-2));a.show_push_splash_ad=!1,a.background_delay_display_time=6e6,a.ads=[],$done({body:JSON.stringify(a)+"OK"})}catch(a){}else{let d=JSON.parse(e);if(a.includes("/statuses/"))d.ad=[],d.advertises=void 0,d.trends=void 0,d.statuses&&(d.statuses=d.statuses.filter((a=>!(["广告","廣告","热推","熱推"].includes(a.mblogtypename)||"ad"===a?.promotion?.type))));else if(a.includes("ct=feed&a=trends"))d.data?.order&&(d.data.order=["search_topic"]);else if(a.includes("php?a=search_topic"))d.data?.length&&"searchtop"===d.data[0].type&&d.data.shift();else if(a.includes("user_center"))d?.data?.cards&&d.data.cards.forEach((a=>{a.items=a.items.filter((a=>!["personal_vip","personal_wallpaper","personal_feedback","personal_topic"].includes(a.type)))}));else if(a.includes("a=get_searching_info"))d={data:{expiration_time:"8e8",cards:[{tip:"",word:""}]},info:"",retcode:0};else if(a.includes("a=icon_center")){if("单色"===d.data[0].title)for(const a of d.data)for(const e of a.card)e.status=1,e.forbidden=0}else a.includes("a=open_app&auth")?d.data&&(d.data.uve_ad_scene="",d.data.vip_info.tips={},d.data.vip_title_ad="",d.data.close_ad_setting={},d.data.background_preview="",d.data.detail_banner_ad=[]):a.includes("a=get_coopen_ads")&&d.data&&(d.data.ad_list=[],d.data.gdt_video_ad_ios=[],d.data.display_ad=0,d.data.ad_ios_id=null,d.data.app_ad_ios_id=null,d.data.reserve_ad_ios_id="",d.data.reserve_app_ad_ios_id="",d.data.ad_duration=6e6,d.data.ad_cd_interval=6e6,d.data.pic_ad=[]);$done({body:JSON.stringify(d)})}











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
