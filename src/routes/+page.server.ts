import { list, getUrl } from "aws-amplify/storage";
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
Amplify.configure(outputs);

export async function load() {
    const listOfArt = await list({ path: "gallery/" });

    const artOutput = await Promise.all(
        listOfArt.items.map(async (item) => {
            const { url } = await getUrl({ path: item.path });
            return url.toString();
        })
    );

    return { artOutput };
}
