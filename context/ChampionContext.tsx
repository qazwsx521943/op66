"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

const initChampion: ChampionData[] = [];

export type useChampionContextType = { champions: ChampionData[] };
const initChampionContextState: useChampionContextType = { champions: [] };
const ChampionContext = createContext<useChampionContextType>(initChampionContextState);

type ChildrenProp = {
    children: ReactNode;
};

export const ChampionProvider = ({ children }: ChildrenProp) => {
    const [champions, setChampions] = useState<ChampionData[]>(initChampion);
    useEffect(() => {
        const fetchChampions = async (): Promise<ChampionData[]> => {
            const data = await fetch("https://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion.json").then((res) => res.json());
            return data.data;
        };
        fetchChampions().then((res) => setChampions(Object.values(res)));
    }, []);
    return <ChampionContext.Provider value={{ champions }}>{children}</ChampionContext.Provider>;
};

export default ChampionContext;
