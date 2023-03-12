import React from "react";
import getChampionByKey from "@/lib/getChampionByKey";
import Image from "next/image";

async function FreeChamp({ id }: { id: number }) {
    const champion: ChampionData = await getChampionByKey(id.toString());
    return (
        <li>
            <Image width={80} height={80} src={`/champion/${champion.image.full}`} alt="champion" />
            <span className="text-sm">{champion.name}</span>
        </li>
    );
}

export default FreeChamp;
