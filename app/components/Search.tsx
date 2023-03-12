"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useState } from "react";

function Search() {
    const [player, setPlayer] = useState("");

    return (
        <div className=" w-5/12 flex flex-row justify-center">
            <input
                className=" overflow-ellipsis bg-slate-300 p-3 rounded"
                value={player}
                placeholder="Summoner Name"
                onChange={(e) => setPlayer(e.target.value)}
            />
            <Link href={`/search/${player}`} className="bg-blue-500 py-2 px-6 rounded text-white">
                Search
            </Link>
        </div>
    );
}

export default Search;
