import React from "react";
import getChampionByKey from "@/lib/getChampionByKey";
import Image from "next/image";
import Link from "next/link";

async function FreeChamp({ id }: { id: number }) {
    const champion: ChampionData = await getChampionByKey(id.toString());
    return (
        <Link href={`/champion/${champion.name}`}>
            <li>
                <Image width={80} height={80} src={`/champion/${champion.image.full}`} alt="champion" />
                <p className="text-sm text-center">{champion.name}</p>
            </li>
        </Link>
    );
}

export default FreeChamp;
