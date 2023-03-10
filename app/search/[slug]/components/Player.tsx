import React from "react";
interface Props {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

function Player({ summoner }: { summoner: Props }) {
    return (
        <div>
            <h1>{summoner.name}</h1>
            <h2>{summoner.summonerLevel}</h2>
        </div>
    );
}

export default Player;
