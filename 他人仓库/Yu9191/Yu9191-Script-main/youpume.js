var baby = JSON.parse($response.body);

baby.level = 1;
baby.isMember = true;
baby.adsDisabled = true;
baby.adsDisabledTill = 4092599349000;

$done({ body: JSON.stringify(baby)});



















// Adding a dummy plugin commit(8)
// Adding a dummy stoverride commit(5)
// Adding a dummy sgmodule commit(11)
