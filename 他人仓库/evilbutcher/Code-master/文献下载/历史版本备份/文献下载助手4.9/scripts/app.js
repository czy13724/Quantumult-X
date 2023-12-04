//$app.tips("使用技巧请查看readme")

if (typeof $cache.get("rename") == "undefined") {
    $cache.set("rename", false);
  }
if (typeof $cache.get("iCloud") == "undefined") {
  $cache.set("iCloud", false);
}
if (typeof $cache.get("share") == "u