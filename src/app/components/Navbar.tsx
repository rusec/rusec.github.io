import React from "react";
import Image from "next/image";
import Link from "next/link";
import Alert from "./Alert";
import { getMotd } from "../api/info/getMotd";

type Props = {};

async function Navbar({}: Props) {
    let infoMotd = await getMotd();

    return (
        <div className="navbar bg-base-300 z-40">
            <div className="navbar-start">
                <div className="dropdown z-20">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-secondary-content">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 text-secondary-content shadow"
                    >
                        <li>
                            <Link href="/">Homepage</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image src={"/logo.png"} alt="RUSEC Logo" priority width={50} height={50} style={{ objectFit: "contain" }} />
                </Link>
            </div>
            <div className="navbar-end text-accent relative">
                <Alert alert={infoMotd?.alert} />
            </div>
        </div>
    );
}

export default Navbar;
