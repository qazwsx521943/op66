import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="flex px-4 py-2 bg-blue-500 justify-start">
            <Link href="/">
                <h1 className=" text-4xl font-bold text-white cursor-pointer">OP.66</h1>
            </Link>
            <nav className="flex gap-3 items-center text-white ml-10">
                <Link href="/champion">
                    <h2>英雄</h2>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
