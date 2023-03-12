import React from "react";

function Rank({ rank }: { rank: any }) {
    const winRate = ((rank.wins / (rank.wins + rank.losses)) * 100).toFixed(2);
    return <div>win Rate: {winRate}%</div>;
}

export default Rank;
