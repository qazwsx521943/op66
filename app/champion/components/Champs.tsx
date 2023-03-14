"use client";
import Image from "next/image";
import React, { useState } from "react";
import Skin from "./skins";
import { getChampionSkins } from "@/lib/champions/allChampions";

function Champs({ champ }: { champ: string }) {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleMouseOver = (): void => {
        setIsHovering(true);
    };
    const handleMouseOut = (): void => setIsHovering(false);
    return (
        <>
            <Image
                key={champ}
                src={`/loading/${champ}_0.jpg`}
                alt={champ}
                width={200}
                height={300}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
            {isHovering ? <Skin champ={champ} /> : null}
        </>
    );
}

export default Champs;
