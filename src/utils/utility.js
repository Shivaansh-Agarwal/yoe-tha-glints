export function shortenString(str, wordCount) {
  return str.split(" ").slice(0, wordCount).join(" ");
}
