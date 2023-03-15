import React from "react";
import Header from "./Components/Header";
import Tab from "./Components/Tab";
import getChampionByName from "@/lib/getChampionByName";
import Tips from "./Components/Tips";
import Skin from "./Components/Skin";
type Params = {
    params: {
        championName: string;
    };
};

async function Champion({ params: { championName } }: Params) {
    const championData = await getChampionByName(championName);

    return (
        <main>
            <Header championData={championData} />
            <Tips championData={championData} />
            <Tab />
            <div className="flex flex-wrap gap-5 mt-5">
                {championData.skins.map((skin: Skins) => (
                    <Skin key={skin.id} skin={skin} name={championData.id} />
                ))}
            </div>
        </main>
    );
}

export default Champion;
