import Navigation from "@/components/Navigation";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { users } from "@/data/users";
import SidePanel from "@/components/SidePanel";
import UserList from "@/components/UserList";
import { useState, useEffect } from 'react';

export default function Accounts() {

    const [selected, setSelected] = useState("Student")

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="my-5 flex h-full w-full flex-col items-center space-y-4">
                    <SearchBar />
                    <div className="flex flex-row w-full justify-start space-x-5 ml-24">
                        <button onClick={() => setSelected("Student")} className="h-8 w-36 rounded-xl bg-gray-800 text-white hover:bg-gray-500">
                            Student's
                        </button>
                        <button onClick={() => setSelected("Admin")} className="h-8 w-32 rounded-xl bg-gray-800 text-white hover:bg-gray-500">
                            Admin
                        </button>
                    </div>
                    <p className="font-bold text-lg">{selected} List Account</p>
                    <div className="flex w-2/3 flex-col text-black border-2 border-gray-500 bg-[#fafaff] space-y-4 p-4 items-center">
                        {users.map((user, i) =>
                            user.role === "Admin Staff" ? (
                                <UserList {...user} key={i} selected="admin" />
                            ) : (
                                <UserList {...user} key={i} selected="student" />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
