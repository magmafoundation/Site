import axios from 'axios';

export interface IStats {
    closed_issues: number;
    open_issues: number;
    player_count: number;
    server_count: number;
}


export async function getStats() {
    console.log(`Fetching stats...`);


    let response = await axios.get(`http://localhost:3001/api/stats`);
    return response.data as IStats
}
