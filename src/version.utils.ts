import axios from 'axios';
import { getApiURL } from './api.url';

export interface Download {
    tag: string,
    URL: string,
    isDev: boolean
    published_at: Date,
    mcVersion: string
}


export async function getDownloads(version: string, dev: boolean): Promise<Array<Download>> {

    const downloads: Array<Download> = [];

    console.log(`Fetching downloads for version ${version} dev: ${dev} http://localhost:3001/api/resources/magma/${version}/${(dev ? 'dev' : 'stable')}`);

    let response = await axios.get(`${getApiURL()}/resources/magma/${version}/${(dev ? 'dev' : 'stable')}`);


    for (let download of response.data) {
        let download_url = 'ERROR';

        if (version === '1.12.2') {
            for (let asset of download.assets) {
                if (asset.name.toLowerCase().includes('-server.jar')) {
                    download_url = asset.browser_download_url;
                }
            }
        } else {
            for (let asset of download.assets) {
                if (asset.name.toLowerCase().includes('-installer.jar')) {
                    download_url = asset.browser_download_url;
                }
            }
        }


        downloads.push({
            tag: download.tag_name,
            isDev: false,
            published_at: download.published_at,
            URL: download_url,
            mcVersion: version,
        });
    }
    return downloads;
}
