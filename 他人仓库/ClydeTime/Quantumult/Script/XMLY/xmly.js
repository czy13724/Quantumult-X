/******************************

脚本功能：喜马拉雅+解锁VIP
更新时间：2022-11-22
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/xdcs-collector\.ximalaya\.com\/(api|nyx)\/v1 url reject
^https?:\/\/.*\.ximalaya\.com\/mobile-playpage\/view\/ url reject
^https?:\/\/.*\.ximalaya\.com\/chaos-notice-web\/v1\/message\/preview\/list url reject
^https?:\/\/.*\.ximalaya\.com\/social-web\/bottomTabs\/dynamicEntrance\/status url reject
^https?:\/\/.*\.xmcdn\.com\/\w{8}\/\w{4}-\w{16}\/.+gif$ url reject
^https?:\/\/.*\.ximalaya\.com\/(dog-portal\/checkOld|(child-mobile\/child|aged-mobile\/aged)\/mode\/query) url reject
^https?:\/\/.*\.ximalaya\.com\/discovery-feed\/isShowUserGiftPendant url reject
^https?:\/\/.*\.ximalaya\.com\/mobile-user\/unread url reject
^https?:\/\/.*\.ximalaya\.com/mobile-user/minorProtection/pop url reject
^https?:\/\/.*\.ximalaya\.com\/collector\/xl\/v\d url reject
^https?:\/\/.*\.ximalaya\.com\/butler-portal\/versionCheck url reject
^https?:\/\/(adse\.wsa|adse|adbehavior)\.ximalaya\.com\/.* url reject
^https?:\/\/.*\.ximalaya\.com\/mobile\/discovery\/v\d\/location url reject
^https?:\/\/.*\.ximalaya\.com\/hotWord url reject
^https?:\/\/.*\.ximalaya\.com\/guideWord url reject
^https?:\/\/.*\.ximalaya\.com\/api\/v\d\/adRealTime url reject
^https?:\/\/.*\.ximalaya\.com\/ting\/(loading|feed|home)? url reject
^https?:\/\/.*\.ximalaya\.com\/discovery-feed\/focus\/queryF url reject
^https?:\/\/(mobile|mobilehera|mobwsa)\.ximalaya\.com\/focus-mobile\/focusPic\/info url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/noFocusAd.js
^https?:\/\/(mobile|mobilehera|mobwsa|mwsa|m|ar)\.ximalaya\.com\/(mobile\/(v\d\/album\/track|album\/paid\/info)|nyx\/history\/query\/detail|starwar\/task|vip\/(check|tabs|v\d\/recommand)|mobile-(user|album\/album\/page|playpage\/(playpage\/(tabs|recommendInfo)|track))|product\/(promotion|detail\/v1\/basicInfo)|business-vip-|(playlist|rec-association\/recommend)\/album) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly.js
#^https?:\/\/(mobile|mobilehera|mobwsa|pns)\.ximalaya\.com\/(mobile-playpage|mobile\/(quickplay|acceptapn)|comment-mobile/get|sound-guide-portal\/(sound\/guide|display)) url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly_crack.js

[mitm] 

hostname = *.ximalaya.com, *.xmcdn.com, 180.153.255.*, 180.153.140.*, 180.153.250.*, 114.80.99.*, 114.80.139.237, 114.80.161.29, 1.62.62.64

*******************************/

var _0xodv='jsjiami.com.v6',_0xodv_=['‮_0xodv'],_0x43e2=[_0xodv,'w5vCtsKQX0MSPcO/wprCm0k=','Q1BXLMKa','aW1MFcKX','wp1GwpnCkcKJ','w6rCjl7DhMKC','wrbCqsKoGX/DisKKB8OnEjs/','wptFFBLDqw==','VsKUwpcXw4RyDQ==','AcOYw4J+wpw=','EsKYw6TCjw4=','wrtsLAzDgMOsNw==','WcK2w4jDqRs=','wppNwpzCrsK8','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','wq7CqWsmw4k=','jsyqjbdTriamHMEYFi.Rcogm.v6=='];if(function(_0x24c472,_0x48e32f,_0x36bd7e){function _0x3f70bc(_0x46e338,_0x2365f7,_0xb5ed67,_0x3eca82,_0x311c6e,_0x2e1e85){_0x2365f7=_0x2365f7>>0x8,_0x311c6e='po';var _0x5a179d='shift',_0x1ce2fb='push',_0x2e1e85='‮';if(_0x2365f7<_0x46e338){while(--_0x46e338){_0x3eca82=_0x24c472[_0x5a179d]();if(_0x2365f7===_0x46e338&&_0x2e1e85==='‮'&&_0x2e1e85['length']===0x1){_0x2365f7=_0x3eca82,_0xb5ed67=_0x24c472[_0x311c6e+'p']();}else if(_0x2365f7&&_0xb5ed67['replace'](/[yqbdTrHMEYFRg=]/g,'')===_0x2365f7){_0x24c472[_0x1ce2fb](_0x3eca82);}}_0x24c472[_0x1ce2fb](_0x24c472[_0x5a179d]());}return 0x11ca42;};return _0x3f70bc(++_0x48e32f,_0x36bd7e)>>_0x48e32f^_0x36bd7e;}(_0x43e2,0x177,0x17700),_0x43e2){_0xodv_=_0x43e2['length']^0x177;};function _0x2f1c(_0x8b3b6c,_0x3fe57b){_0x8b3b6c=~~'0x'['concat'](_0x8b3b6c['slice'](0x1));var _0x387006=_0x43e2[_0x8b3b6c];if(_0x2f1c['tRcRIk']===undefined){(function(){var _0x1fa741=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x488bd6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1fa741['atob']||(_0x1fa741['atob']=function(_0xc11cb1){var _0x57b50a=String(_0xc11cb1)['replace'](/=+$/,'');for(var _0x1b5492=0x0,_0x398c6d,_0x5a7dda,_0x106a9e=0x0,_0x2a36fa='';_0x5a7dda=_0x57b50a['charAt'](_0x106a9e++);~_0x5a7dda&&(_0x398c6d=_0x1b5492%0x4?_0x398c6d*0x40+_0x5a7dda:_0x5a7dda,_0x1b5492++%0x4)?_0x2a36fa+=String['fromCharCode'](0xff&_0x398c6d>>(-0x2*_0x1b5492&0x6)):0x0){_0x5a7dda=_0x488bd6['indexOf'](_0x5a7dda);}return _0x2a36fa;});}());function _0xf588e0(_0x53a228,_0x3fe57b){var _0xc97088=[],_0x35f77f=0x0,_0x39e955,_0x132066='',_0x1b5247='';_0x53a228=atob(_0x53a228);for(var _0x1a66ed=0x0,_0x34f7d0=_0x53a228['length'];_0x1a66ed<_0x34f7d0;_0x1a66ed++){_0x1b5247+='%'+('00'+_0x53a228['charCodeAt'](_0x1a66ed)['toString'](0x10))['slice'](-0x2);}_0x53a228=decodeURIComponent(_0x1b5247);for(var _0x4e7869=0x0;_0x4e7869<0x100;_0x4e7869++){_0xc97088[_0x4e7869]=_0x4e7869;}for(_0x4e7869=0x0;_0x4e7869<0x100;_0x4e7869++){_0x35f77f=(_0x35f77f+_0xc97088[_0x4e7869]+_0x3fe57b['charCodeAt'](_0x4e7869%_0x3fe57b['length']))%0x100;_0x39e955=_0xc97088[_0x4e7869];_0xc97088[_0x4e7869]=_0xc97088[_0x35f77f];_0xc97088[_0x35f77f]=_0x39e955;}_0x4e7869=0x0;_0x35f77f=0x0;for(var _0x186c2b=0x0;_0x186c2b<_0x53a228['length'];_0x186c2b++){_0x4e7869=(_0x4e7869+0x1)%0x100;_0x35f77f=(_0x35f77f+_0xc97088[_0x4e7869])%0x100;_0x39e955=_0xc97088[_0x4e7869];_0xc97088[_0x4e7869]=_0xc97088[_0x35f77f];_0xc97088[_0x35f77f]=_0x39e955;_0x132066+=String['fromCharCode'](_0x53a228['charCodeAt'](_0x186c2b)^_0xc97088[(_0xc97088[_0x4e7869]+_0xc97088[_0x35f77f])%0x100]);}return _0x132066;}_0x2f1c['YulYJT']=_0xf588e0;_0x2f1c['DtpCrn']={};_0x2f1c['tRcRIk']=!![];}var _0x3193c6=_0x2f1c['DtpCrn'][_0x8b3b6c];if(_0x3193c6===undefined){if(_0x2f1c['Uydlig']===undefined){_0x2f1c['Uydlig']=!![];}_0x387006=_0x2f1c['YulYJT'](_0x387006,_0x3fe57b);_0x2f1c['DtpCrn'][_0x8b3b6c]=_0x387006;}else{_0x387006=_0x3193c6;}return _0x387006;};eval(function(_0x4eed8a,_0x322709,_0x33aaa8,_0x2a709f,_0xf32766,_0x512823){var _0x568420={'YMwPy':_0x2f1c('‫0','kSeD'),'xDKlh':function(_0xde71ea,_0x5070c4){return _0xde71ea<_0x5070c4;},'RLHrJ':function(_0xd2e598,_0x434251){return _0xd2e598(_0x434251);},'enMwl':function(_0x44ea42,_0x5402ad){return _0x44ea42>_0x5402ad;},'HmLAv':function(_0x239114,_0x35b265){return _0x239114(_0x35b265);},'sbkrj':function(_0x121edf,_0x59d7ff){return _0x121edf(_0x59d7ff);},'zZzuY':function(_0x1d0a61,_0x1111a3){return _0x1d0a61+_0x1111a3;},'uNWwp':function(_0x11d1a7,_0x5706a6){return _0x11d1a7(_0x5706a6);}};var _0xcaccf2=_0x568420[_0x2f1c('‮1','P(05')][_0x2f1c('‮2','P(05')]('|'),_0x2c9140=0x0;while(!![]){switch(_0xcaccf2[_0x2c9140++]){case'0':;continue;case'1':_0xf32766=function(_0x33aaa8){return(_0x277570[_0x2f1c('‮3','L0Du')](_0x33aaa8,_0x322709)?'':_0xf32766(_0x277570[_0x2f1c('‮4','99gw')](parseInt,_0x33aaa8/_0x322709)))+(_0x277570['teLwJ'](_0x33aaa8=_0x33aaa8%_0x322709,0x23)?String[_0x2f1c('‮5','D2[@')](_0x277570['WUMAR'](_0x33aaa8,0x1d)):_0x33aaa8['toString'](0x24));};continue;case'2':var _0x277570={'rERHE':function(_0x52e8b7,_0xd03c7b){return _0x568420['xDKlh'](_0x52e8b7,_0xd03c7b);},'cycVx':function(_0x2dc609,_0x3a4595){return _0x568420[_0x2f1c('‮6','iVFb')](_0x2dc609,_0x3a4595);},'teLwJ':function(_0x5cb883,_0x8aec0c){return _0x568420['enMwl'](_0x5cb883,_0x8aec0c);},'WUMAR':function(_0x3c20e3,_0x538ea0){return _0x3c20e3+_0x538ea0;}};continue;case'3':if(!''[_0x2f1c('‫7','@@%b')](/^/,String)){while(_0x33aaa8--)_0x512823[_0x568420[_0x2f1c('‫8','vaoC')](_0xf32766,_0x33aaa8)]=_0x2a709f[_0x33aaa8]||_0x568420[_0x2f1c('‫9','5^7(')](_0xf32766,_0x33aaa8);_0x2a709f=[function(_0xf32766){return _0x512823[_0xf32766];}];_0xf32766=function(){return'\x5cw+';};_0x33aaa8=0x1;}continue;case'4':while(_0x33aaa8--)if(_0x2a709f[_0x33aaa8])_0x4eed8a=_0x4eed8a[_0x2f1c('‫a','iVFb')](new RegExp(_0x568420[_0x2f1c('‮b','fU*y')]('\x5cb',_0x568420[_0x2f1c('‫c','L0Du')](_0xf32766,_0x33aaa8))+'\x5cb','g'),_0x2a709f[_0x33aaa8]);continue;case'5':return _0x4eed8a;}break;}}(_0x2f1c('‫d','4)&N'),0x3e,0x10d,'||||||||||||body|data|delete|length|modules|list||playpage|url|tracks||method|trackInfo|indexOf|GET|album|isPaid|price|in|var|vipFreeType|isVipFree|autoPlayInfo|albumInfo|albums|entrances|vip|if|vipStatus|for|displayPrice|discountedPrice|type|baseAlbum|mobile|displayDiscountedPrice|level|serviceModule|isFree|priceUnit|key|listenModels|jscomp|v1|isVip|userInfo|com|u4f1a|u5458|vipProfileVo||||||user|track|business|web|priceTypeId|priceTypeEnum|userLevel|response|listen|recommendInfo|playlist|page|baseInfo|homePage|single|dynamic|h5|recommand|query|recommend|vipInfo|u60a8|u662f|u6c38|u4e45|https|ximalaya|nickName|function|return|raw|request|done|JSON|tabs|v2|detail|mobile_web|presale|h5_web|api|profile|gift_detail|tabs_v1|paid_info|4102415999E3|vipLevel|id|push|priceTypes|Length|promotionGuideInfo|associationAlbumsInfo|http|imagev2|xmcdn|storages|2fd2|audiofreehighqps|93||C6|GKwRIDoF9MpUAAAP_AEhz|MP|png|title|u7b49|u7ea7|nextLevel|66666|59|TEXT|u4f4e|logoPic|scope|createTemplateTagFirstArg|createTemplateTagFirstArgWithRaw|console|log|u4e3aundefined|parse|check|starwar|task|v3|product|promotion|basicInfo|gift|nyx|history|paid|info|rec|association|context|currentUser|anchorVipInfo||vipExpireTime|status|210|215|userLevelIcon|subtitle|productAdsResource|vipProducts|renewTips|jointVipProducts|vipLevelPrivilege|btnText|u53bb|u5347|btnJumpUrl|gatekeeper|grade|ts|1646193928|grow|tasks||progress|curLevel|curLevelPoint|25E3|nextLevelPoint|88888||point|vipPrivileges|expire|2099|value|total|1888|state|content|V5|u7ea7_|u6708|u5ea6|u793c|u5305|expireTime|button|buttonImage|buttonUrl|iting|open|msg_type|313|vipSpuId|100000|vipCategoryId|105||fallbackUrl|2Fm|2Fgatekeeper|2Fbusiness|new|orderSource|app_Other_VipChannel_VipCard|subscriptType|buttonIcon|buttonType|buttonText|u7eed|u8d39|groupName|8_4|u5c06|u5230|u671f|u6781|u610f|u613f|u6709|u99966|u5b9e|u9a8c|u7ec42|groupId|currentLevel|levelUrl|utmsource|vipchannel|levelIcon|op_type|unlimited|valueToUpGrade|666|moduleType|VIP_NEW_STATUS_V4|sortEnable|moduleId|guideText|subText|text|vipValueText|POST|stringify'[_0x2f1c('‫e','F$9c')]('|'),0x0,{}));;_0xodv='jsjiami.com.v6';











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
