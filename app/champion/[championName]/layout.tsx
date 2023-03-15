import type { Metadata } from "next";

type metaProps = {
    params: {
        championName: string;
    };
};

export async function generateMetadata({ params: { championName } }: metaProps): Promise<Metadata> {
    console.log(championName);
    return {
        title: championName,
        icons: {
            icon: `/champion/${championName}.png`,
        },
    };
}

export default function ChampionLayout({ children }: { children: React.ReactNode }) {
    return <main className="h-full px-20 pt-5">{children}</main>;
}
