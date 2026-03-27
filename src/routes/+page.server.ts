import type { PageServerLoad } from "./$types";
const cdnUrl = "https://cdn.demonically-online.com/";

export const load: PageServerLoad = async ({ fetch, url }) => {
    const res = await fetch(cdnUrl + "manifest.json");
    const artList = await res.json();
    const artUrls = artList['files'].map((entry: string) => `${cdnUrl}${entry}`);
    const splitArt = artUrls.slice(0, 5);

    const loc = url.searchParams.get("loc");
    const type = url.searchParams.get("type");


    return { splitArt, loc, type };
}
