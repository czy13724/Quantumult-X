export function articleToMarkdown(img, title, content) {
  return $text.HTMLEscape(`![](${img})\n### ${title}\n${content}`)
}



// Adding a dummy plugin commit(2)
// Adding a dummy stoverride commit(1)
// Adding a dummy sgmodule commit(4)
