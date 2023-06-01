import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
    return (
        <div className="relative mb-2 w-1/2">
            <input
                className="h-10 w-full rounded-lg border bg-white pl-3 pr-8 text-base focus:outline-none"
                type="text"
                placeholder=""
                id="email"
            />
            <div className="absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-white px-4 font-bold text-black">
                <AiOutlineSearch color="black" />
            </div>
        </div>
    );
}
