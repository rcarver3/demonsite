import type { PageServerLoad } from "./$types";
const cdnUrl = "https://cdn.demonically-online.com/";

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(cdnUrl + "manifest.json");
    const artList = await res.json();
    const artUrls = artList['files'].map((entry: string) => `${cdnUrl}${entry}`);
    const splitArt = artUrls.slice(0, 5);

    return { splitArt };
}
