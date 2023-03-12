import React, { Suspense } from "react";
import axios from "axios";
import Rank from "./components/Rank";
import Player from "./components/Player";
import getSummoner from "@/lib/getSummoner";
import getSummonerRank from "@/lib/getSummonerRank";
import { Metadata } from "next";
import getSummonerMastery from "@/lib/getSummonerMastery";
import Mastery from "./components/Mastery";

type Params = {
    params: {
        summonername: string;
    };
};

// next13.2 dynamic metadata solution
export async function generateMetadata({ params: { summonername } }: Params): Promise<Metadata> {
    return {
        title: summonername,
        description: `${summonername} Game Status`,
    };
}

async function PlayerDisplay({ params: { summonername } }: Params) {
    const summoner = await getSummoner(summonername);
    const [rank] = await getSummonerRank(summoner.id);
    const mastery: Mastery[] = await getSummonerMastery(summoner.id);
    console.log(mastery);

    return (
        <div className="flex justify-start items-start mt-2 mx-9">
            <Player summoner={summoner} />
            {rank ? <Rank rank={rank} /> : <h2>No rank gaming history in this Season</h2>}

            <div className="flex flex-col">
                <Suspense fallback={<p>Loading</p>}>
                    {/* {mastery.map((champ, i) => {
                        return <Mastery champ={champ} key={i} />;
                    })} */}
                </Suspense>
            </div>
        </div>
    );
}

export default PlayerDisplay;
