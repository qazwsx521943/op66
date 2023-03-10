import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="flex px-4 py-2 bg-blue-500">
            <Link href="/">
                <h1 className=" text-xl font-bold text-white cursor-pointer">Player Search</h1>
            </Link>
            <nav></nav>
        </div>
    );
}

export default Navbar;
