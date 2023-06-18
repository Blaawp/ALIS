import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom"

export default function SearchBar({
    isCatalog = false,
    text = ""
}) {
    return (
        <div className="relative mb-2 w-1/2 drop-shadow-lg">
            <input
                className="h-10 w-full rounded-lg border bg-white pl-3 pr-8 text-base focus:outline-none font-bold"
                type="text"
                placeholder=""
                id="email"
                value={text}
            />
            <Link to={isCatalog ? "/cataloging/searching" : ""} className="absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-white px-4 font-bold text-black">
                <AiOutlineSearch color="black" />
            </Link>
        </div>
    );
}
