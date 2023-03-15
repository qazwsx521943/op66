export async function allChampionName() {
    const resp = await fetch("https://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion.json").then((res) => res.json());
    const championsName: string[] = Object.keys(resp.data);

    return championsName;
}

export async function getAllChampion() {
    const resp = await fetch("https://ddragon.leagueoflegends.com/cdn/13.5.1/data/zh_TW/champion.json").then((res) => res.json());
    const championArray: [string, any][] = Object.entries(resp.data);

    return championArray;
}

export async function getChampionData(championName: string) {
    const resp = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion/${championName}.json`).then((res) =>
        res.json()
    );
    const championData: any = resp.data;

    return championData;
}
