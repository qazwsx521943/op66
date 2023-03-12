import React from "react";
import Header from "./Components/Header";
import Tab from "./Components/Tab";
import getChampionByName from "@/lib/getChampionByName";
import Tips from "./Components/Tips";
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
        </main>
    );
}

export default Champion;
