import axios from 'axios';
import { getApiURL } from './api.url';

export interface IStats {
    closed_issues: number;
    open_issues: number;
    player_count: number;
    server_count: number;
}


export async function getStats() {
    console.log(`Fetching stats...`);


    let response = await axios.get(`${getApiURL()}/stats`);
    return response.data as IStats
}
