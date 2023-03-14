export async function allChampionName() {
    const resp = await fetch("https://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/championFull.json").then((res) => res.json());
    const championsName: string[] = Object.keys(resp.data);

    return championsName;
}

export async function getChampionSkins(championName: string) {
    const resp = await fetch("https://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/championFull.json").then((res) => res.json());
    const skinsArray = resp.data[championName].skins;

    return skinsArray
}
