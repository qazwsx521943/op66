export default async function getFreeChamp() {
    const res = await fetch(`https://tw2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.LOL_API_KEY}`, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "https://developer.riotgames.com",
        },
    });
    if (!res.ok) {
        throw new Error("fail to fetch champions");
    }

    const freeChamp = await res.json();
    console.log(freeChamp);
    return freeChamp["freeChampionIds"];
}
