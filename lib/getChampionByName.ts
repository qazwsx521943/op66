export default async function getChampionByName(champName: string) {
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.5.1/data/zh_TW/champion/${champName}.json`);
    if (!res.ok) {
        throw new Error("fail to find Champion");
    }
    console.log(res.headers.get("content-type"));
    const championDetail = await res.json();
    const championData = championDetail.data;
    console.log(championData);

    return championData[champName];
}
