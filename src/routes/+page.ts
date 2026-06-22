import type { PageLoad } from "./$types";
import { featuredImages } from "$lib/gallery-data";

export const load: PageLoad = async () => {
  const splitArt = featuredImages.map((img) => `/${img.src}`);

  return { splitArt };
};
