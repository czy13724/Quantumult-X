function getFlagEmoji(e) {
    const n = e
      .toUpperCase()
      .split("")
      .map((e) => 127397 + e.charCodeAt());
    return String.fromCodePoint(...n).replace(/🇹🇼/g, "🇨🇳");
  }
  console.log(getFlagEmoji(" "));
  