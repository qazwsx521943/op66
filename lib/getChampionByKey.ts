export default async function getChampionByKey(champKey: string) {
    const res = await fetch("http://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion.json");
    if (!res.ok) {
        throw new Error("fail to find summoner");
    }

    const resjson = await res.json();
    let foundChamp;
    for (const champion in resjson.data) {
        if (resjson.data[champion]["key"] === champKey) {
            foundChamp = resjson.data[champion];
            break;
        }
    }
    return foundChamp;
}
