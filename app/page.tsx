import Search from "./components/Search";
import FreeChamp from "./components/FreeChamp";
import getFreeChamp from "@/lib/getFreeChamp";
import Link from "next/link";

export default async function Home() {
    const freeChamp: number[] = await getFreeChamp();

    return (
        <main className="flex flex-col gap-9 justify-center items-center h-[600px]">
            <Search />
            <h1 className="text-center text-2xl ">本週免角</h1>
            <ul className="flex flex-row w-1/2 flex-wrap gap-2">
                {freeChamp.map((id) => (
                    <FreeChamp key={id} id={id} />
                ))}
            </ul>
            {/* <FreeChamp /> */}
        </main>
    );
}
