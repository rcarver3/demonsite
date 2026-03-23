import type { PageServerLoad } from "./$types";
const cdnUrl = "https://cdn.demonically-online.com/";

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(cdnUrl + "manifest.json");
    const artList = await res.json();
    const artUrls = artList['files'].map((entry: string) => {
        const filenameSplit = entry.split('.');
        return `${cdnUrl}${filenameSplit[0] + '.webp'}`;
    });
    const splitArt = artUrls.slice(0, 5);

    return { splitArt };
}
