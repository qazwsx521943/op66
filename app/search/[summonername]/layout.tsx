import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Summoner Data",
    description: "",
};

export default function SummonerLayout({ children }: { children: React.ReactNode }) {
    return <main className="h-full px-20">{children}</main>;
}
