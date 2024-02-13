function getFlagEmoji(e) {
    const n = e
      .toUpperCase()
      .split("")
      .map((e) => 127397 + e.charCodeAt());
    return String.fromCodePoint(...n).replace(/🇹🇼/g, "🇨🇳");
  }
  console.log(getFlagEmoji(" "));






















// Adding a dummy plugin commit(9)
// Adding a dummy stoverride commit(6)
// Adding a dummy sgmodule commit(12)
