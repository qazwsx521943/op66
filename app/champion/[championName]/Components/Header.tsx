import Image from "next/image";
import React from "react";

function Header({ championData }: any) {
    return (
        <div className="flex border-b-gray-400 border-b-2 pb-2 mb-5">
            <div className="flex justify-start gap-5">
                <Image src={`/champion/${championData.image.full}`} alt="champion" width={100} height={100} />
                <div className="flex flex-col justify-around">
                    <div className="flex gap-3">
                        <h1 className="text-5xl">{championData.name}</h1>
                        {championData.tags.map((tag, i) => (
                            <div key={i} className="rounded bg-blue-400 text-center p-3 text-white">
                                {tag}
                            </div>
                        ))}
                    </div>
                    <h2 className="text-3xl">{championData.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
