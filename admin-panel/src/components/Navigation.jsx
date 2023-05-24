import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Navigation() {
    const router = useRouter();

    return (
        <nav className="flex max-h-24 flex-row items-center justify-between bg-white px-4 text-black">
            <img src="/logo/alis-transparent.png" className="w-20" alt=" " />
            <div className="flex w-6/12 flex-row items-center justify-around">
                <Link
                    href="/dashboard"
                    className={`text-xl font-bold ${
                        router.pathname === "/dashboard"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Dashboard
                </Link>
                <Link
                    href="/inventory"
                    className={`text-xl font-bold ${
                        router.pathname === "/inventory"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Inventory
                </Link>
                <Link
                    href="/archives"
                    className={`text-xl font-bold ${
                        router.pathname === "/archives"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Archives
                </Link>
                <Link
                    href="/notification"
                    className={`text-xl font-bold ${
                        router.pathname === "/notification"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Notification
                </Link>
                <Link
                    href="/duedates"
                    className={`text-xl font-bold ${
                        router.pathname === "/duedates"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Due Dates
                </Link>
            </div>
            <div className="flex w-2/12 flex-row items-center justify-evenly">
                <FaUserCircle color="black" />
                <p className="text-xl font-bold">Admin</p>
                <Link href="/">
                    <RiLogoutBoxRLine color="black" />
                </Link>
            </div>
        </nav>
    );
}
