export default async function getSummoner(summonerName: string) {
    const res = await fetch(
        `https://tw2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.LOL_API_KEY}`
    );
    if (!res.ok) {
        throw new Error("fail to find summoner");
    }
    return res.json();
}
