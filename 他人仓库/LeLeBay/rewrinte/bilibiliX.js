# b站精简占用
[rewrite_local]
(?=resource\?resourceUrl|upos\-sz\-staticcos) url reject
(?=.*(hdslb\.com.*(\.zip|\.mp4)))^((?!(hdslb\.com\/bfs\/app-static\/)).)*$ url reject


// Adding a dummy sgmodule commit(3)
// Adding a dummy plugin commit(2)
