"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { getChampionData } from "@/lib/champions/allChampions";
import useChampion from "@/hooks/useChampion";
import { useRouter } from "next/navigation";

function Champs() {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const handleMouseOver = (): void => {
        setIsHovering(true);
    };
    const router = useRouter();
    const { champions } = useChampion();
    // console.log(champions);
    const handleMouseOut = (): void => setIsHovering(false);
    return (
        <>
            {champions.map((champ: ChampionData) => (
                <Image
                    key={champ.id}
                    src={`/loading/${champ.id}_0.jpg`}
                    alt={champ.name}
                    width={200}
                    height={300}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() => router.push(`/champion/${champ.id}`)}
                    className="cursor-pointer"
                />
            ))}
        </>
    );
}

export default Champs;
