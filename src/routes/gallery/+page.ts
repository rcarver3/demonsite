import type { PageLoad } from "./$types";
import { getAllGalleryImages } from "$lib/gallery-data";
import { resolve } from "$app/paths";

export const load: PageLoad = async () => {
	const artUrls = getAllGalleryImages().map((img) => ({
		src: resolve('/[src]', {src: img.src}),
		alt: img.alt,
	}));

	return { artUrls };
};
