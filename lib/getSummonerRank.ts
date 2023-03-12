export default async function getSummonerRank(summonerId: string) {
    const res = await fetch(
        `https://tw2.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.LOL_API_KEY}`
    );
    if (!res.ok) {
        throw new Error("fail to fetch rank status");
    }
    return res.json();
}
