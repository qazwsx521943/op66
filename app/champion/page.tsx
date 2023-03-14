import React from "react";
import { allChampionName } from "@/lib/champions/allChampions";
import Champs from "./components/champs";
async function ChampionListPage() {
    const data = await allChampionName();
    return (
        <div className="flex flex-wrap gap-3">
            {data.map((champ) => (
                <Champs key={champ} champ={champ} />
            ))}
        </div>
    );
}

export default ChampionListPage;
