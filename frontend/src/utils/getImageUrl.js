export function getImageUrl(filename) {
  return new URL(`../assets/images/${filename}`, import.meta.url).href;
}
