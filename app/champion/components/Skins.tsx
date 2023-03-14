"use client";
import React from "react";
import { getChampionSkins } from "@/lib/champions/allChampions";
type Props = {
    champ: string;
};

function Skin({ champ }: Props) {
    const skins = async () => await getChampionSkins(champ);

    return (
        <div>
            {skins.map((skin) => (
                <span>{skin.id}</span>
            ))}
        </div>
    );
}

export default Skin;
