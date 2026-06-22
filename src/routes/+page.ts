import type { PageLoad } from "./$types";
import { featuredImages } from "$lib/gallery-data";
import { resolve } from "$app/paths";

export const load: PageLoad = async () => {
	const splitArt = featuredImages.map((img) => resolve("/[src]", {src: img.src}));

	return { splitArt };
};
