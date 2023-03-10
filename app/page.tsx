"use client";
import Player from "./search/[slug]/components/Player";
import Search from "./components/Search";
import { useState } from "react";

export default function Home() {
    const [player, setPlayer] = useState("");
    return (
        <main className="flex flex-col gap-9 justify-center items-center h-[600px]">
            <Search player={player} setPlayer={setPlayer} />
        </main>
    );
}
