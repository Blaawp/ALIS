import { useSetAtom } from "jotai";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { sessionAtom } from "../Store";

export default function Navigation() {
    const { pathname } = useLocation();

    const setSession = useSetAtom(sessionAtom);

    return (
        <nav className="flex max-h-24 flex-row items-center justify-between bg-white px-4 text-black">
            <img src="/logo/alis-transparent.png" className="w-20" alt=" " />
            <div className="flex w-6/12 flex-row items-center justify-around">
                <Link
                    to="/dashboard"
                    className={`text-xl font-bold ${
                        pathname === "/dashboard"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Dashboard
                </Link>
                <Link
                    to="/inventory"
                    className={`text-xl font-bold ${
                        pathname === "/inventory"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Inventory
                </Link>
                <Link
                    to="/archives"
                    className={`text-xl font-bold ${
                        pathname === "/archives"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Archives
                </Link>
                <Link
                    to="/notification"
                    className={`text-xl font-bold ${
                        pathname === "/notification"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Notification
                </Link>
                <Link
                    to="/duedates"
                    className={`text-xl font-bold ${
                        pathname === "/duedates"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Due Dates
                </Link>
                <Link
                    to="/borrowing"
                    className={`text-xl font-bold ${
                        pathname === "/borrowing"
                            ? "text-blue-500"
                            : "text-black"
                    }`}
                >
                    Borrowing
                </Link>
            </div>
            <div className="flex w-2/12 flex-row items-center justify-evenly">
                <FaUserCircle color="black" />
                <p className="text-xl font-bold">Admin</p>
                <Link to="/" onClick={() => setSession(null)}>
                    <RiLogoutBoxRLine color="black" />
                </Link>
            </div>
        </nav>
    );
}
