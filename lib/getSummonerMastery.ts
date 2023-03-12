export default async function getSummonerMastery(summonerId: string) {
    const res = await fetch(
        `https://tw2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}/top?api_key=${process.env.LOL_API_KEY}`
    );
    if (!res.ok) {
        throw new Error("fail to find Mastery");
    }
    return res.json();
}
