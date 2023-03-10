import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import axios from "axios";
type Props = {
    player: string;
    setPlayer: Dispatch<SetStateAction<string>>;
};

function Search({ player, setPlayer }: Props) {
    return (
        <div className=" w-5/12 flex flex-row justify-center">
            <input
                className=" overflow-ellipsis bg-slate-300 p-3 rounded"
                value={player}
                placeholder="League username"
                onChange={(e) => setPlayer(e.target.value)}
            />
            <Link href={`/search/${player}`} className="bg-blue-500 py-2 px-6 rounded text-white">
                Search
            </Link>
        </div>
    );
}

export default Search;
