/******************************

脚本功能：Noto 笔记+解锁订阅
下载地址：https://is.gd/R4hqR6
软件版本：3.4.3
脚本作者：彭于晏💞
更新时间：2022-10-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/noto.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x4632=['\x47\x73\x4f\x69\x77\x70\x66\x44\x68\x77\x48\x44\x76\x4d\x4b\x72\x53\x54\x33\x43\x68\x38\x4f\x74\x43\x6b\x33\x44\x69\x6c\x2f\x43\x70\x73\x4b\x37\x47\x58\x54\x44\x6d\x69\x66\x43\x67\x51\x3d\x3d','\x77\x6f\x51\x50\x77\x36\x54\x43\x6e\x38\x4f\x54\x4b\x79\x54\x44\x6b\x63\x4f\x51\x77\x37\x6c\x45','\x59\x45\x54\x43\x72\x42\x72\x44\x71\x38\x4f\x73\x77\x71\x59\x3d','\x77\x36\x46\x6d\x55\x4d\x4b\x57\x77\x70\x6c\x47\x45\x38\x4f\x45\x4d\x79\x76\x44\x6a\x63\x4f\x75\x77\x6f\x50\x43\x6b\x4d\x4f\x71\x49\x58\x6a\x44\x69\x31\x59\x72\x77\x71\x6b\x3d','\x77\x36\x4c\x43\x76\x63\x4b\x35','\x54\x7a\x59\x62\x77\x71\x4c\x44\x6e\x69\x33\x43\x73\x58\x42\x44','\x77\x71\x64\x76\x54\x77\x6f\x36\x77\x6f\x54\x43\x73\x4d\x4f\x66\x66\x73\x4f\x45\x59\x41\x33\x44\x71\x38\x4f\x47\x57\x47\x58\x44\x75\x32\x44\x43\x73\x6e\x34\x3d','\x63\x45\x6b\x67\x77\x72\x49\x68\x77\x6f\x72\x43\x6f\x73\x4f\x6a\x50\x48\x78\x53\x42\x57\x62\x43\x67\x38\x4b\x4f\x77\x37\x54\x43\x68\x4d\x4b\x4c\x4d\x45\x5a\x37\x44\x31\x54\x43\x71\x38\x4b\x70\x77\x34\x4c\x44\x75\x67\x7a\x44\x76\x4d\x4b\x77\x77\x36\x33\x43\x74\x69\x34\x55\x51\x78\x4c\x43\x68\x73\x4f\x37\x5a\x45\x63\x46\x77\x37\x44\x43\x6f\x63\x4b\x47\x43\x73\x4f\x41\x4a\x51\x3d\x3d','\x77\x36\x4c\x43\x75\x4d\x4b\x36\x77\x70\x6f\x6e\x62\x63\x4f\x6b\x77\x72\x5a\x4c\x47\x48\x42\x61\x43\x32\x4a\x4d\x77\x71\x30\x4a\x61\x4d\x4b\x62\x48\x51\x3d\x3d','\x77\x70\x6c\x44\x47\x63\x4b\x41\x77\x35\x51\x3d','\x65\x38\x4b\x6e\x43\x43\x74\x7a\x65\x63\x4f\x39\x42\x42\x62\x43\x75\x73\x4f\x72\x77\x72\x44\x43\x70\x54\x56\x6a\x77\x70\x6e\x44\x68\x58\x77\x59\x77\x36\x73\x63\x77\x35\x42\x66\x61\x63\x4f\x78\x77\x35\x58\x43\x69\x38\x4b\x34\x4e\x33\x44\x44\x73\x63\x4b\x72\x77\x34\x4a\x52\x4f\x42\x72\x44\x73\x38\x4f\x68\x77\x71\x7a\x44\x6a\x63\x4f\x48\x77\x34\x76\x44\x6c\x38\x4f\x6a','\x77\x34\x66\x43\x6a\x33\x48\x44\x72\x42\x50\x44\x72\x6e\x35\x62\x77\x34\x67\x72\x77\x36\x4c\x44\x6a\x32\x6b\x50\x77\x71\x44\x43\x76\x38\x4f\x76\x46\x4d\x4b\x6e\x77\x70\x34\x3d','\x77\x71\x50\x44\x74\x73\x4f\x2b\x49\x52\x38\x42\x4b\x63\x4b\x71\x77\x34\x48\x44\x6d\x38\x4b\x35\x77\x36\x54\x43\x73\x63\x4f\x76\x77\x36\x33\x43\x6b\x69\x42\x36\x77\x6f\x38\x58','\x77\x6f\x66\x44\x73\x79\x51\x52\x66\x46\x48\x44\x6b\x38\x4f\x45\x56\x38\x4f\x52\x77\x35\x37\x43\x69\x7a\x48\x44\x6c\x47\x6e\x43\x67\x38\x4f\x5a\x77\x72\x33\x44\x6b\x4d\x4f\x73','\x77\x37\x58\x43\x76\x4d\x4f\x44\x5a\x73\x4b\x4f','\x5a\x43\x39\x78\x77\x36\x72\x44\x6e\x63\x4f\x6d\x65\x63\x4f\x69\x61\x6b\x33\x44\x71\x48\x77\x31\x77\x72\x34\x76\x62\x38\x4f\x4f\x77\x6f\x76\x43\x67\x73\x4b\x2f\x66\x73\x4f\x67\x77\x72\x4c\x44\x6f\x41\x3d\x3d','\x57\x33\x64\x61\x77\x36\x76\x43\x6a\x73\x4f\x50\x50\x63\x4b\x34\x4c\x77\x3d\x3d','\x77\x70\x70\x57\x47\x63\x4b\x61\x77\x35\x2f\x43\x73\x63\x4f\x7a\x63\x38\x4b\x76'];(function(_0x3eb6e4,_0x46324b){var _0x28318c=function(_0x5f41fc){while(--_0x5f41fc){_0x3eb6e4['push'](_0x3eb6e4['shift']());}};var _0x203602=function(){var _0x248ac9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5db3fd,_0x382cb6,_0x187a91,_0x216d75){_0x216d75=_0x216d75||{};var _0xe249d=_0x382cb6+'='+_0x187a91;var _0xd27be2=0x0;for(var _0x58a707=0x0,_0x59d2da=_0x5db3fd['length'];_0x58a707<_0x59d2da;_0x58a707++){var _0x25c704=_0x5db3fd[_0x58a707];_0xe249d+=';\x20'+_0x25c704;var _0x4baa6a=_0x5db3fd[_0x25c704];_0x5db3fd['push'](_0x4baa6a);_0x59d2da=_0x5db3fd['length'];if(_0x4baa6a!==!![]){_0xe249d+='='+_0x4baa6a;}}_0x216d75['cookie']=_0xe249d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x55e030,_0x39c415){_0x55e030=_0x55e030||function(_0x49a065){return _0x49a065;};var _0x2db6bc=_0x55e030(new RegExp('(?:^|;\x20)'+_0x39c415['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0xa8778a=function(_0x46b16e,_0x2ae62a){_0x46b16e(++_0x2ae62a);};_0xa8778a(_0x28318c,_0x46324b);return _0x2db6bc?decodeURIComponent(_0x2db6bc[0x1]):undefined;}};var _0x2bb5fb=function(){var _0x563097=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x563097['test'](_0x248ac9['removeCookie']['toString']());};_0x248ac9['updateCookie']=_0x2bb5fb;var _0xff3613='';var _0x35fa27=_0x248ac9['updateCookie']();if(!_0x35fa27){_0x248ac9['setCookie'](['*'],'counter',0x1);}else if(_0x35fa27){_0xff3613=_0x248ac9['getCookie'](null,'counter');}else{_0x248ac9['removeCookie']();}};_0x203602();}(_0x4632,0x16b));var _0x2831=function(_0x3eb6e4,_0x46324b){_0x3eb6e4=_0x3eb6e4-0x0;var _0x28318c=_0x4632[_0x3eb6e4];if(_0x2831['MnVJSh']===undefined){(function(){var _0x248ac9;try{var _0xff3613=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x248ac9=_0xff3613();}catch(_0x35fa27){_0x248ac9=window;}var _0x2bb5fb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x248ac9['atob']||(_0x248ac9['atob']=function(_0x5db3fd){var _0x382cb6=String(_0x5db3fd)['replace'](/=+$/,'');var _0x187a91='';for(var _0x216d75=0x0,_0xe249d,_0xd27be2,_0x58a707=0x0;_0xd27be2=_0x382cb6['charAt'](_0x58a707++);~_0xd27be2&&(_0xe249d=_0x216d75%0x4?_0xe249d*0x40+_0xd27be2:_0xd27be2,_0x216d75++%0x4)?_0x187a91+=String['fromCharCode'](0xff&_0xe249d>>(-0x2*_0x216d75&0x6)):0x0){_0xd27be2=_0x2bb5fb['indexOf'](_0xd27be2);}return _0x187a91;});}());var _0x5f41fc=function(_0x59d2da,_0x25c704){var _0x4baa6a=[],_0x55e030=0x0,_0x39c415,_0x2db6bc='',_0xa8778a='';_0x59d2da=atob(_0x59d2da);for(var _0x46b16e=0x0,_0x2ae62a=_0x59d2da['length'];_0x46b16e<_0x2ae62a;_0x46b16e++){_0xa8778a+='%'+('00'+_0x59d2da['charCodeAt'](_0x46b16e)['toString'](0x10))['slice'](-0x2);}_0x59d2da=decodeURIComponent(_0xa8778a);var _0x49a065;for(_0x49a065=0x0;_0x49a065<0x100;_0x49a065++){_0x4baa6a[_0x49a065]=_0x49a065;}for(_0x49a065=0x0;_0x49a065<0x100;_0x49a065++){_0x55e030=(_0x55e030+_0x4baa6a[_0x49a065]+_0x25c704['charCodeAt'](_0x49a065%_0x25c704['length']))%0x100;_0x39c415=_0x4baa6a[_0x49a065];_0x4baa6a[_0x49a065]=_0x4baa6a[_0x55e030];_0x4baa6a[_0x55e030]=_0x39c415;}_0x49a065=0x0;_0x55e030=0x0;for(var _0x563097=0x0;_0x563097<_0x59d2da['length'];_0x563097++){_0x49a065=(_0x49a065+0x1)%0x100;_0x55e030=(_0x55e030+_0x4baa6a[_0x49a065])%0x100;_0x39c415=_0x4baa6a[_0x49a065];_0x4baa6a[_0x49a065]=_0x4baa6a[_0x55e030];_0x4baa6a[_0x55e030]=_0x39c415;_0x2db6bc+=String['fromCharCode'](_0x59d2da['charCodeAt'](_0x563097)^_0x4baa6a[(_0x4baa6a[_0x49a065]+_0x4baa6a[_0x55e030])%0x100]);}return _0x2db6bc;};_0x2831['TTdmqd']=_0x5f41fc;_0x2831['YUywoC']={};_0x2831['MnVJSh']=!![];}var _0x203602=_0x2831['YUywoC'][_0x3eb6e4];if(_0x203602===undefined){if(_0x2831['ntwvAH']===undefined){var _0x3a9611=function(_0x234748){this['AJhQuP']=_0x234748;this['UMZtVo']=[0x1,0x0,0x0];this['xyXXed']=function(){return'newState';};this['GbDieM']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['mktvEB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3a9611['prototype']['TfnvVZ']=function(){var _0x1f883f=new RegExp(this['GbDieM']+this['mktvEB']);var _0x1d2fde=_0x1f883f['test'](this['xyXXed']['toString']())?--this['UMZtVo'][0x1]:--this['UMZtVo'][0x0];return this['mzawgO'](_0x1d2fde);};_0x3a9611['prototype']['mzawgO']=function(_0x2b9d3b){if(!Boolean(~_0x2b9d3b)){return _0x2b9d3b;}return this['OYofwp'](this['AJhQuP']);};_0x3a9611['prototype']['OYofwp']=function(_0x361731){for(var _0x32dd0d=0x0,_0x2c1de8=this['UMZtVo']['length'];_0x32dd0d<_0x2c1de8;_0x32dd0d++){this['UMZtVo']['push'](Math['round'](Math['random']()));_0x2c1de8=this['UMZtVo']['length'];}return _0x361731(this['UMZtVo'][0x0]);};new _0x3a9611(_0x2831)['TfnvVZ']();_0x2831['ntwvAH']=!![];}_0x28318c=_0x2831['TTdmqd'](_0x28318c,_0x46324b);_0x2831['YUywoC'][_0x3eb6e4]=_0x28318c;}else{_0x28318c=_0x203602;}return _0x28318c;};var _0x3c5706=function(){var _0xfa8112=!![];return function(_0x598dcd,_0x24527e){var _0x204c9e=_0xfa8112?function(){if(_0x24527e){var _0x74a0d4=_0x24527e[_0x2831('\x30\x78\x62','\x50\x6e\x64\x38')](_0x598dcd,arguments);_0x24527e=null;return _0x74a0d4;}}:function(){};_0xfa8112=![];return _0x204c9e;};}();var _0x44f0da=_0x3c5706(this,function(){var _0x117922=function(){var _0x3efde6=_0x117922[_0x2831('\x30\x78\x31\x30','\x55\x21\x4d\x23')](_0x2831('\x30\x78\x30','\x32\x75\x57\x6e'))()[_0x2831('\x30\x78\x31\x31','\x29\x47\x53\x76')](_0x2831('\x30\x78\x63','\x6f\x54\x47\x73'));return!_0x3efde6['\x74\x65\x73\x74'](_0x44f0da);};return _0x117922();});_0x44f0da();var _0x55b28d=JSON[_0x2831('\x30\x78\x36','\x48\x77\x62\x74')]($response['\x62\x6f\x64\x79']);_0x55b28d={'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65':_0x2831('\x30\x78\x35','\x70\x68\x74\x32'),'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x183d52a4eaa,'\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72':{'\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73':{'\x70\x72\x6f':{'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':'','\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':_0x2831('\x30\x78\x66','\x5e\x36\x4c\x39'),'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x2831('\x30\x78\x61','\x6a\x6f\x54\x46')}},'\x66\x69\x72\x73\x74\x5f\x73\x65\x65\x6e':'\x32\x30\x32\x32\x2d\x31\x30\x2d\x31\x34\x54\x30\x36\x3a\x32\x30\x3a\x34\x33\x5a','\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e':_0x2831('\x30\x78\x33','\x4d\x4f\x73\x21'),'\x6d\x61\x6e\x61\x67\x65\x6d\x65\x6e\x74\x5f\x75\x72\x6c':_0x2831('\x30\x78\x37','\x45\x29\x56\x29'),'\x6e\x6f\x6e\x5f\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{},'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x5f\x75\x73\x65\x72\x5f\x69\x64':_0x2831('\x30\x78\x34','\x5a\x39\x44\x33'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e':_0x2831('\x30\x78\x31','\x70\x68\x74\x32'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':'\x32\x30\x32\x32\x2d\x31\x30\x2d\x31\x34\x54\x30\x36\x3a\x31\x38\x3a\x35\x36\x5a','\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73':{},'\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{'\x63\x6f\x6d\x2e\x6c\x6b\x7a\x68\x61\x6f\x2e\x65\x64\x69\x74\x6f\x72\x2e\x66\x75\x6c\x6c':{'\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':'','\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78':![],'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x2831('\x30\x78\x39','\x29\x59\x42\x4b'),'\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65':_0x2831('\x30\x78\x32','\x58\x34\x21\x58'),'\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65':'\x70\x72\x6f','\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x2831('\x30\x78\x38','\x4e\x35\x30\x46'),'\x73\x74\x6f\x72\x65':_0x2831('\x30\x78\x64','\x6f\x54\x47\x73'),'\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null}}}};$done({'\x62\x6f\x64\x79':JSON[_0x2831('\x30\x78\x65','\x48\x77\x62\x74')](_0x55b28d)});











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
