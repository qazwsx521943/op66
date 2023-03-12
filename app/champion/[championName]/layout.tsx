import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Champion Data",
    description: "",
};

export default function ChampionLayout({ children }: { children: React.ReactNode }) {
    return <main className="h-full px-20 pt-5">{children}</main>;
}
