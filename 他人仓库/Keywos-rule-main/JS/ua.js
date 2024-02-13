let header = $request.headers;let ua = header["User-Agent"] || header["user-agent"];if (ua.includes("AMap") || ua.includes("Cainiao")) {if ("undefined" !== typeof $task) $done({ status: "HTTP/1.1 404 Not Found" });else $done();}else $done({});




































// Adding a dummy sgmodule commit(16)
// Adding a dummy plugin commit(14)
// Adding a dummy stoverride commit(11)
