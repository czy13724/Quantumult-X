/**
 * 项目名称：Cloudflare 优选 IP (Cloudflare Speed Test & IP Selector)
 * 项目作者：ZenMoFeiShi
 * 使用说明：用于 Quantumult X 本地 Task 定时测试并获取 Cloudflare 最佳优选节点 IP
 */
function md5cycle(x, k) {
  let a = x[0], b = x[1], c = x[2], d = x[3];
  function cmn(q, a, b, x, s, t) {
    a = (a + q + x + t) | 0;
    return (((a << s) | (a >>> (32 - s))) + b) | 0;
  }
  function ff(a, b, c, d, x, s, t) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
  function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
  function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }

  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);

  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);

  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);

  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);

  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);

  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);

  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);

  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);

  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);

  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);

  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);

  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);

  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);

  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);

  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);

  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);

  x[0] = (a + x[0]) | 0;
  x[1] = (b + x[1]) | 0;
  x[2] = (c + x[2]) | 0;
  x[3] = (d + x[3]) | 0;
}
function md5blk(s) {
  const md5blks = [];
  for (let i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) +
      (s.charCodeAt(i + 1) << 8) +
      (s.charCodeAt(i + 2) << 16) +
      (s.charCodeAt(i + 3) << 24);
  }
  return md5blks;
}
function md51(s) {
  const n = s.length;
  const state = [1732584193, -271733879, -1732584194, 271733878];
  let i;
  for (i = 64; i <= n; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(i - 64);
  const tail = new Array(16).fill(0);
  for (i = 0; i < s.length; i++) {
    tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
  }
  tail[i >> 2] |= 0x80 << ((i % 4) << 3);
  if (i > 55) {
    md5cycle(state, tail);
    for (i = 0; i < 16; i++) tail[i] = 0;
  }
  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
}
function rhex(n) {
  const s = "0123456789abcdef";
  let j, str = "";
  for (j = 0; j < 4; j++) {
    str += s.charAt((n >> (j * 8 + 4)) & 0x0F) +
      s.charAt((n >> (j * 8)) & 0x0F);
  }
  return str;
}
function hex(x) {
  return x.map(rhex).join("");
}
function md5(s) {
  return hex(md51(s));
}

const time = Date.now().toString();
const key = md5(md5("DdlTxtN0sUOu") + "70cloudflareapikey" + time);

const url = `https://api.uouin.com/index.php/index/Cloudflare?key=${key}&time=${time}`;

const myRequest = { url, method: "GET" };

// ===== ping + 带宽综合评分 =====
function getBestIP(info) {
  const valid = info.filter(i => i.loss === "0.00%");
  const arr = valid.map(i => {
    let p = parseFloat(i.ping);
    let bw = parseFloat(i.bandwidth.replace("mb",""));
    let score = (100 - p) * 0.5 + bw * 0.5;
    return { ip: i.ip, ping: p, bw, score };
  });
  arr.sort((a,b) => b.score - a.score);
  return arr[0];
}

function uint8ArrayToString(u8arr) {
  let s = "";
  for (let i = 0; i < u8arr.length; i++) {
    s += String.fromCharCode(u8arr[i]);
  }
  return s;
}
function stringToUint8Array(str) {
  const u8arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) u8arr[i] = str.charCodeAt(i);
  return u8arr;
}

const PROFILE_PATH = "../Profiles/vps.snippet";

$task.fetch(myRequest).then(resp => {
  try {
    let raw = resp.body;
    if (!raw) return $done($notify("获取失败","无响应"));

    let data = JSON.parse(raw).data;
    if (!data || !data.cmcc || !data.cmcc.info)
      return $done($notify("获取失败","无  数据"));

    // 需要优选的运营商（可自行更改）
    let best = getBestIP(data.cucc.info);
    if (!best) return $done($notify("无可用IP","为空"));

    let newIP = best.ip;

    // ====== 读取文件 ======
    let file = $iCloud.readFile(PROFILE_PATH);
    if (!file) return $done($notify("读取失败","无法读取 vps.snippet"));

    let txt = uint8ArrayToString(file);
    let lines = txt.split(/\r?\n/);

    let count = 0;

    // 批量替换所有 vless 行
    for (let i=0;i<lines.length;i++){
      if (lines[i].startsWith("vless=")){
        let prefixLen = "vless=".length;
        let idx = lines[i].indexOf(":", prefixLen);
        if (idx > prefixLen){
          let rest = lines[i].slice(idx);
          lines[i] = "vless=" + newIP + rest;
          count++;
        }
      }
    }

    if (count === 0) {
      return $done($notify("未找到 vless 行","未进行任何替换"));
    }

    // 写回文件
    let newContent = lines.join("\n");
    let ok = $iCloud.writeFile(stringToUint8Array(newContent), PROFILE_PATH);

    if (!ok) {
      return $done($notify("写入失败","无法更新 vps.snippet"));
    }

    $notify(
      "Cloudflare优选ip · 替换成功",
      "",
      `替换节点数量：${count}\n全部更新为：${newIP}\nPing:${best.ping}ms 带宽:${best.bw}mb`
    );
    $done();

  } catch(e){
    $notify("脚本异常", "", String(e));
    $done();
  }
});
