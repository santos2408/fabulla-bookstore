export function getImageUrl(path, filename) {
  return new URL(`../assets/images/${path}/${filename}`, import.meta.url).href;
}
