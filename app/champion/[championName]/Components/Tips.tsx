import React from "react";

function Tips({ championData }: any) {
    const allytips = championData.allytips;
    const enemytips = championData.enemytips;
    return (
        <div className="flex justify-between gap-5">
            <ul className="">
                <h2 className="font-semibold ">對線技巧：</h2>
                {enemytips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                ))}
            </ul>
            <ul className="">
                <h2 className="font-semibold ">友軍提示：</h2>
                {allytips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tips;
