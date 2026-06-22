import type { PageLoad } from "./$types";
import { getAllGalleryImages } from "$lib/gallery-data";

export const load: PageLoad = async () => {
	const artUrls = getAllGalleryImages().map((img) => ({
		src: img.src,
		alt: img.alt,
		thumbnail: img.thumbnail
	}));

	return { artUrls };
};
