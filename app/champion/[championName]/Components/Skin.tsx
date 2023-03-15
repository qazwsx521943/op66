import Image from "next/image";
import React from "react";
type Props = {
    skin: Skins;
    name: string;
};
function Skin({ skin, name }: Props) {
    const skinName = skin.name === "default" ? "一般" : skin.name;
    return (
        <div className="flex flex-col gap-2 items-center">
            <Image src={`/loading/${name}_${skin.num}.jpg`} alt={skin.name} width={200} height={300} />
            <p className="font-bold overflow-ellipsis">{skinName}</p>
        </div>
    );
}
export default Skin;
