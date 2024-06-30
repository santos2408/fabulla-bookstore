export function getImageUrl(folder, filename) {
  return new URL(`../assets/images/${folder}/${filename}`, import.meta.url).href;
}
