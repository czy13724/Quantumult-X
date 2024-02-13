export function articleToMarkdown(img, title, content) {
  return $text.HTMLEscape(`![](${img})\n### ${title}\n${content}`)
}
// Adding a dummy sgmodule commit(2)
// Adding a dummy plugin commit(1)
