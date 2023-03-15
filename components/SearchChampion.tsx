"use client";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import { getAllChampion } from "@/lib/champions/allChampions";

function SearchChampion() {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");
    // console.log(search);
    const en_US = use(getAllChampion());

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(en_US[0][1].name);
        const matchName = en_US.filter((champ) => champ[1].name === search);
        // const matchName = en_US.find((champ) => champ[1].name === e.target.value);
        // if (!matchName) {
        //     return;
        // }
    };

    return (
        <div className="flex gap-5 w-full justify-center ">
            <input className="bg-slate-300 rounded h-10 w-1/5 px-5 my-auto" type="text" value={search} onChange={(e) => searchChange(e)} />

            <button className=" bg-blue-500 px-5 py-2 rounded" onClick={() => router.push(`/champion/${search}`)}>
                搜尋
            </button>
        </div>
    );
}

export default SearchChampion;
