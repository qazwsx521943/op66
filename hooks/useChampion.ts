import { useContext } from "react";
import { useChampionContextType } from "@/context/ChampionContext";
import ChampionContext from "@/context/ChampionContext";

const useChampion = (): useChampionContextType => {
    return useContext(ChampionContext);
};

export default useChampion;
