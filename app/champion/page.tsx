import React from "react";
import { allChampionName } from "@/lib/champions/allChampions";
import Champs from "./components/Champs";
import SearchChampion from "@/components/SearchChampion";
async function ChampionListPage() {
    const data = await allChampionName();

    return (
        <div className="flex flex-wrap gap-3">
            <SearchChampion />
            <Champs />
        </div>
    );
}

export default ChampionListPage;
