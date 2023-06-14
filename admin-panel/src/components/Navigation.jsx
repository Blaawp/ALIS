import { useAtom } from "jotai";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { sessionAtom } from "../Store";   

export default function Navigation() {
    const { pathname } = useLocation();

    const [session, setSession] = useAtom(sessionAtom);

    return (
        <div className="flex max-h-24 flex-row items-center justify-between bg-[#0b5793] border-[#ede51c] border-b-2 px-4 text-black">
            <img src="/logo/alis_cropped.jpg" className="my-2 w-20 rounded-full" alt=" " />
            <div className="flex w-6/12 flex-row items-center justify-around">
                
            </div>
            <div className="flex w-2/12 flex-row items-center justify-evenly">
                <FaUserCircle color="white" size="30px"/>
                <p className="text-xl text-white font-bold">{session != null ? session.user.role == 3 ? "Student" : "Admin" : "error"}</p>
                <Link to="/" onClick={() => setSession(null)}>
                    <RiLogoutBoxRLine color="white" size="30px" />
                </Link>
            </div>
        </div>
    );
}
