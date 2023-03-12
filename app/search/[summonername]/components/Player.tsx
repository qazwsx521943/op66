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
            <div className="flex flex-row gap-4 items-center">
                <img
                    src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/profileicon/${summoner.profileIconId}.png`}
                    alt="profileIcon"
                    className="w-[100px]"
                />
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-5xl">{summoner.name}</h1>
                    <h2 className="font-medium text-xl">Summoner Level:{summoner.summonerLevel}</h2>
                </div>
            </div>
        </div>
    );
}

export default Player;
