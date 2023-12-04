//$app.idleTimerDisabled = true;
if (typeof $cache.get("rename") == "undefined") {
    $cache.set("rename", false);
  }
if (typeof $cache.get("iCloud") == "undefined") {
  $cache.set("iCloud", false);
}
if (typeof $cache.get("share") == "undefined") {
  $cache.set("share", false);
}