const data = $intent.parameter;
const write = $persistentStore.write(data, "APP_BJ");
$done();

// Adding a dummy plugin commit(1)
// Adding a dummy sgmodule commit(3)
