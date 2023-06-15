import { useSetAtom } from "jotai";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiHomeAlt, BiBook, BiArchive, BiCalendar, BiIdCard} from "react-icons/bi"
import { TbMessageReport } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { sessionAtom } from "../Store";

export default function SidePanel() {
    const { pathname } = useLocation();

    const setSession = useSetAtom(sessionAtom);

    return (
        <div className="flex bg-white flex-col h-screen mb-32 w-1/4 text-xl font-bold text-[#062c45] py-5">
            <Link
                to="/dashboard"
                className={`flex flex-row h-16 items-center ${
                    pathname === "/dashboard"
                        ? "bg-[#e6e6e6]"
                        : "bg-white"
                }`}
            >
                <BiHomeAlt color="black" size={30} className="w-2/6"/>
                Dashboard
            </Link>
            <Link
                to="/inventory"
                className={`flex flex-row h-16 items-center ${
                    pathname === "/inventory"
                        ? "bg-[#e6e6e6]"
                        : "bg-white"
                }`}
            >
                <BiBook color="black" size={30} className="w-2/6"/>
                Inventory
            </Link>
            <Link
                to="/archives"
                className={`flex flex-row h-16 items-center ${
                    pathname === "/archives"
                        ? "bg-[#e6e6e6]"
                        : "bg-white"
                }`}
            >
                <BiArchive color="black" size={30} className="w-2/6"/>
                Archives
            </Link>
            <Link
                to="/transactions"
                className={`flex flex-row h-16 items-center ${
                    pathname === "/transactions"
                        ? "bg-[#e6e6e6]"
                        : "bg-white"
                }`}
            >
                <BiCalendar color="black" size={30} className="w-2/6"/>
                Book Transaction
            </Link>
            <Link
                to="/addAccount"
                className={`flex flex-row h-16 items-center ${
                    pathname === "/notification"
                        ? "bg-[#e6e6e6]"
                        : "bg-white"
                }`}
            >
                <BiIdCard color="black" size={30} className="w-2/6"/>
                Add Account
            </Link>
            <Link
                to="/reports"
                className={`flex flex-row h-16 items-center ${
                    pathname === "/notification"
                        ? "bg-[#e6e6e6]"
                        : "bg-white"
                }`}
            >
                <TbMessageReport color="black" size={30} className="w-2/6"/>
                Report
            </Link>
            
        </div>
    );
}
