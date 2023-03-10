import React from "react";
import axios from "axios";
import Player from "./components/Player";

const fetchPlayer = async (summoner: string) => {
    const player = await axios.get(
        `https://tw2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.LOL_API_KEY}`
    );
    const playerInfo = player.data;
    return playerInfo;
};
async function PlayerDisplay({ params }: { params: { slug: string } }) {
    const summoner = await fetchPlayer(params.slug);
    console.log(summoner);
    return (
        <div className="h-screen flex justify-center items-center">
            <Player summoner={summoner} />
        </div>
    );
}

export default PlayerDisplay;
