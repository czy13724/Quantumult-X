/******************************

脚本功能：Color Widgets+解锁订阅
下载地址：https://is.gd/T4slSZ
软件版本：4.0.1
脚本作者：彭于晏💞
更新时间：2022-10-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ColorWidgets.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x3809=['\x77\x72\x76\x43\x68\x6b\x7a\x44\x75\x38\x4b\x42\x4e\x4d\x4f\x43\x4c\x38\x4b\x59\x77\x6f\x41\x32\x41\x73\x4f\x49\x4f\x38\x4f\x4f\x77\x36\x63\x36\x77\x72\x4e\x36\x4e\x7a\x54\x43\x6d\x52\x63\x5a','\x77\x36\x70\x7a\x77\x35\x58\x44\x71\x52\x6c\x4c\x77\x37\x78\x45\x77\x72\x39\x48\x77\x34\x48\x43\x6a\x63\x4f\x4f\x77\x35\x35\x79\x77\x72\x63\x51\x4f\x54\x74\x50','\x77\x71\x72\x44\x6a\x33\x7a\x43\x6b\x48\x34\x6f\x77\x71\x51\x3d','\x77\x72\x50\x44\x76\x6e\x45\x33\x49\x63\x4b\x54\x41\x73\x4b\x6e\x55\x67\x3d\x3d','\x77\x70\x7a\x43\x71\x57\x4c\x44\x6f\x63\x4f\x73\x50\x6e\x44\x43\x76\x4d\x4f\x37\x77\x37\x6b\x3d','\x77\x35\x33\x44\x72\x44\x4c\x43\x6f\x4d\x4b\x69\x66\x43\x33\x44\x73\x38\x4b\x75\x77\x72\x49\x56\x44\x6c\x76\x44\x6c\x4d\x4f\x42\x55\x79\x48\x44\x74\x4d\x4f\x7a\x77\x70\x77\x3d','\x62\x79\x48\x44\x6d\x38\x4b\x63\x63\x4d\x4f\x4b\x77\x35\x77\x6a\x77\x37\x66\x43\x69\x57\x49\x74\x77\x71\x74\x34\x77\x36\x49\x69\x50\x6e\x33\x44\x69\x4d\x4f\x34','\x49\x69\x46\x7a\x77\x6f\x45\x59\x4b\x31\x72\x43\x67\x73\x4b\x4c\x4a\x78\x6a\x44\x71\x77\x3d\x3d','\x63\x46\x6c\x48\x77\x36\x4a\x5a','\x44\x63\x4b\x47\x59\x6b\x72\x44\x6a\x73\x4b\x31\x77\x37\x37\x44\x72\x57\x51\x77','\x77\x34\x6a\x44\x73\x38\x4b\x33\x4d\x63\x4b\x57\x77\x36\x39\x68\x45\x33\x49\x3d','\x48\x73\x4b\x47\x50\x53\x42\x38\x66\x7a\x39\x64\x66\x38\x4b\x34\x64\x77\x6e\x44\x73\x67\x3d\x3d','\x64\x58\x38\x31\x77\x35\x70\x42\x64\x77\x76\x44\x67\x73\x4f\x65\x63\x44\x6a\x43\x71\x4d\x4b\x4c\x77\x36\x37\x44\x6f\x73\x4b\x74\x51\x6b\x4c\x43\x69\x41\x38\x3d','\x77\x6f\x50\x43\x74\x73\x4b\x33\x58\x67\x3d\x3d'];(function(_0x3080a5,_0x380934){var _0xff259c=function(_0x1fe0ec){while(--_0x1fe0ec){_0x3080a5['push'](_0x3080a5['shift']());}};var _0x5f0866=function(){var _0x1c6c96={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4574b6,_0x4129e1,_0xded6e1,_0x3b1b1b){_0x3b1b1b=_0x3b1b1b||{};var _0x5eaeb6=_0x4129e1+'='+_0xded6e1;var _0x2a2719=0x0;for(var _0x18a00f=0x0,_0x400ae1=_0x4574b6['length'];_0x18a00f<_0x400ae1;_0x18a00f++){var _0x1dda01=_0x4574b6[_0x18a00f];_0x5eaeb6+=';\x20'+_0x1dda01;var _0x1b4aba=_0x4574b6[_0x1dda01];_0x4574b6['push'](_0x1b4aba);_0x400ae1=_0x4574b6['length'];if(_0x1b4aba!==!![]){_0x5eaeb6+='='+_0x1b4aba;}}_0x3b1b1b['cookie']=_0x5eaeb6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x15aff7,_0x4825cf){_0x15aff7=_0x15aff7||function(_0x22822d){return _0x22822d;};var _0x78f5d0=_0x15aff7(new RegExp('(?:^|;\x20)'+_0x4825cf['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x9fb32d=function(_0x5ce5ff,_0x38c270){_0x5ce5ff(++_0x38c270);};_0x9fb32d(_0xff259c,_0x380934);return _0x78f5d0?decodeURIComponent(_0x78f5d0[0x1]):undefined;}};var _0x57dca3=function(){var _0x138b6e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x138b6e['test'](_0x1c6c96['removeCookie']['toString']());};_0x1c6c96['updateCookie']=_0x57dca3;var _0x58d8ca='';var _0x57669b=_0x1c6c96['updateCookie']();if(!_0x57669b){_0x1c6c96['setCookie'](['*'],'counter',0x1);}else if(_0x57669b){_0x58d8ca=_0x1c6c96['getCookie'](null,'counter');}else{_0x1c6c96['removeCookie']();}};_0x5f0866();}(_0x3809,0x12f));var _0xff25=function(_0x3080a5,_0x380934){_0x3080a5=_0x3080a5-0x0;var _0xff259c=_0x3809[_0x3080a5];if(_0xff25['xsWLBE']===undefined){(function(){var _0x1c6c96=function(){var _0x57669b;try{_0x57669b=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4574b6){_0x57669b=window;}return _0x57669b;};var _0x57dca3=_0x1c6c96();var _0x58d8ca='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x57dca3['atob']||(_0x57dca3['atob']=function(_0x4129e1){var _0xded6e1=String(_0x4129e1)['replace'](/=+$/,'');var _0x3b1b1b='';for(var _0x5eaeb6=0x0,_0x2a2719,_0x18a00f,_0x400ae1=0x0;_0x18a00f=_0xded6e1['charAt'](_0x400ae1++);~_0x18a00f&&(_0x2a2719=_0x5eaeb6%0x4?_0x2a2719*0x40+_0x18a00f:_0x18a00f,_0x5eaeb6++%0x4)?_0x3b1b1b+=String['fromCharCode'](0xff&_0x2a2719>>(-0x2*_0x5eaeb6&0x6)):0x0){_0x18a00f=_0x58d8ca['indexOf'](_0x18a00f);}return _0x3b1b1b;});}());var _0x1fe0ec=function(_0x1dda01,_0x1b4aba){var _0x15aff7=[],_0x4825cf=0x0,_0x78f5d0,_0x9fb32d='',_0x22822d='';_0x1dda01=atob(_0x1dda01);for(var _0x38c270=0x0,_0x138b6e=_0x1dda01['length'];_0x38c270<_0x138b6e;_0x38c270++){_0x22822d+='%'+('00'+_0x1dda01['charCodeAt'](_0x38c270)['toString'](0x10))['slice'](-0x2);}_0x1dda01=decodeURIComponent(_0x22822d);var _0x5ce5ff;for(_0x5ce5ff=0x0;_0x5ce5ff<0x100;_0x5ce5ff++){_0x15aff7[_0x5ce5ff]=_0x5ce5ff;}for(_0x5ce5ff=0x0;_0x5ce5ff<0x100;_0x5ce5ff++){_0x4825cf=(_0x4825cf+_0x15aff7[_0x5ce5ff]+_0x1b4aba['charCodeAt'](_0x5ce5ff%_0x1b4aba['length']))%0x100;_0x78f5d0=_0x15aff7[_0x5ce5ff];_0x15aff7[_0x5ce5ff]=_0x15aff7[_0x4825cf];_0x15aff7[_0x4825cf]=_0x78f5d0;}_0x5ce5ff=0x0;_0x4825cf=0x0;for(var _0x25993f=0x0;_0x25993f<_0x1dda01['length'];_0x25993f++){_0x5ce5ff=(_0x5ce5ff+0x1)%0x100;_0x4825cf=(_0x4825cf+_0x15aff7[_0x5ce5ff])%0x100;_0x78f5d0=_0x15aff7[_0x5ce5ff];_0x15aff7[_0x5ce5ff]=_0x15aff7[_0x4825cf];_0x15aff7[_0x4825cf]=_0x78f5d0;_0x9fb32d+=String['fromCharCode'](_0x1dda01['charCodeAt'](_0x25993f)^_0x15aff7[(_0x15aff7[_0x5ce5ff]+_0x15aff7[_0x4825cf])%0x100]);}return _0x9fb32d;};_0xff25['sKWAxN']=_0x1fe0ec;_0xff25['cRGtfa']={};_0xff25['xsWLBE']=!![];}var _0x5f0866=_0xff25['cRGtfa'][_0x3080a5];if(_0x5f0866===undefined){if(_0xff25['MOFgQh']===undefined){var _0x1ea6fe=function(_0xdc6940){this['UBnmKe']=_0xdc6940;this['bFRBOh']=[0x1,0x0,0x0];this['NPBHnV']=function(){return'newState';};this['udRWHa']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['kzmUWs']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1ea6fe['prototype']['TrbTWw']=function(){var _0x4f6412=new RegExp(this['udRWHa']+this['kzmUWs']);var _0x3349f8=_0x4f6412['test'](this['NPBHnV']['toString']())?--this['bFRBOh'][0x1]:--this['bFRBOh'][0x0];return this['ejJLyR'](_0x3349f8);};_0x1ea6fe['prototype']['ejJLyR']=function(_0x227e75){if(!Boolean(~_0x227e75)){return _0x227e75;}return this['eoFKyT'](this['UBnmKe']);};_0x1ea6fe['prototype']['eoFKyT']=function(_0x484e33){for(var _0x205698=0x0,_0x580153=this['bFRBOh']['length'];_0x205698<_0x580153;_0x205698++){this['bFRBOh']['push'](Math['round'](Math['random']()));_0x580153=this['bFRBOh']['length'];}return _0x484e33(this['bFRBOh'][0x0]);};new _0x1ea6fe(_0xff25)['TrbTWw']();_0xff25['MOFgQh']=!![];}_0xff259c=_0xff25['sKWAxN'](_0xff259c,_0x380934);_0xff25['cRGtfa'][_0x3080a5]=_0xff259c;}else{_0xff259c=_0x5f0866;}return _0xff259c;};var _0x446d2a=function(){var _0x2aec4a=!![];return function(_0x401c1c,_0x2deed1){var _0x14159d=_0x2aec4a?function(){if(_0x2deed1){var _0x5eed7c=_0x2deed1['\x61\x70\x70\x6c\x79'](_0x401c1c,arguments);_0x2deed1=null;return _0x5eed7c;}}:function(){};_0x2aec4a=![];return _0x14159d;};}();var _0x112c80=_0x446d2a(this,function(){var _0xdc1651=function(){var _0x11282e=_0xdc1651['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f')()[_0xff25('\x30\x78\x37','\x6f\x31\x72\x6a')](_0xff25('\x30\x78\x35','\x21\x50\x47\x53'));return!_0x11282e['\x74\x65\x73\x74'](_0x112c80);};return _0xdc1651();});_0x112c80();var _0x44fdf2=JSON[_0xff25('\x30\x78\x64','\x6c\x5e\x41\x37')]($response[_0xff25('\x30\x78\x34','\x4b\x78\x45\x46')]);_0x44fdf2[_0xff25('\x30\x78\x30','\x44\x51\x79\x6b')][_0xff25('\x30\x78\x63','\x42\x78\x38\x32')]={'\x70\x72\x6f':{'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0xff25('\x30\x78\x36','\x76\x71\x4d\x39'),'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':'\x63\x77\x5f\x31\x39\x39\x39\x5f\x6c\x79\x5f\x33\x64\x30','\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0xff25('\x30\x78\x62','\x6a\x25\x30\x4a')}},_0x44fdf2[_0xff25('\x30\x78\x39','\x49\x79\x70\x57')][_0xff25('\x30\x78\x32','\x63\x35\x36\x54')]={'\x63\x77\x5f\x31\x39\x39\x39\x5f\x6c\x79\x5f\x33\x64\x30':{'\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0xff25('\x30\x78\x36','\x76\x71\x4d\x39'),'\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78':![],'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0xff25('\x30\x78\x61','\x49\x79\x70\x57'),'\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65':'\x6e\x6f\x72\x6d\x61\x6c','\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0xff25('\x30\x78\x33','\x42\x78\x38\x32'),'\x73\x74\x6f\x72\x65':_0xff25('\x30\x78\x38','\x44\x67\x59\x67'),'\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null}};$done({'\x62\x6f\x64\x79':JSON[_0xff25('\x30\x78\x31','\x45\x4d\x71\x77')](_0x44fdf2)});











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
