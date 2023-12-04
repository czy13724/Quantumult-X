let { body } = $response;
if (/html>/.test(body)) {
    // 去弹窗
    body = body.replace(/<head>/, `<head><style type="text/css">#notice_container{display:none!important;}</style>`);
    let dom = new DOMParser()
        , document = dom.parseFromString(body, 'text/html')
    // 去插入广告
    document.querySelector('.video-list')
        .querySelectorAll('.video-item ')
        .forEach((item) => {
            if (item.querySelector('.cursor-pointer').getAttribute('adv_id')
                || !item.querySelector('.title').textContent?.trim()) {
                item.remove()
            }
        })
    body = document.documentElement.outerHTML
}

$done({ body });