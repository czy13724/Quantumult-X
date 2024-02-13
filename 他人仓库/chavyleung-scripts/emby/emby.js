const CHECK_URL = 'mb3admin.com/admin/service/registration/validateDevice'

const url = $request.url
const isCheckUrl = (url) => url.includes(CHECK_URL)

if (isCheckUrl(url) && $response.status != 200) {
  const unlock = {
    cacheExpirationDays: 999,
    resultCode: 'GOOD',
    message: 'Device Valid'
  }

  const status = 200
  const headers = $response.headers
  const body = JSON.stringify(unlock)

  $done({ status, headers, body })
} else {
  $done({})
}
















// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
// Adding a dummy sgmodule commit(10)
