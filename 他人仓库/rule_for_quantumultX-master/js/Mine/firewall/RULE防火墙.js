const read = $persistentStore.read("APP_BJ");
$done({ matched: Boolean(read) });
// Adding a dummy sgmodule commit(1)
// Adding a dummy plugin commit(1)
