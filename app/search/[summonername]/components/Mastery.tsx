import React from "react";
import getChampionByKey from "@/lib/getChampionByKey";

async function Mastery({ champ }: any): Promise<JSX.Element> {
    const { championId, championLevel, championPoints } = champ;
    const champion: any = await getChampionByKey(championId.toString());
    return (
        <div>
            <h1>{champion.name}</h1>
            {/* <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/profileicon/${summoner.profileIconId}.png`}
                alt="profileIcon"
                className="w-[100px]"
            /> */}
            <h1>{championLevel}</h1>
        </div>
    );
}

export default Mastery;
