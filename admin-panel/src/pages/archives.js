import Navigation from "@/components/Navigation";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { books } from "@/data/books";
import ArchivedList from "@/components/ArchivedList";

export default function archives() {
    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                <SearchBar />
                <div className="flex w-10/12 flex-col text-black">
                    <div className="grid grid-cols-3 gap-y-3 place-content-center">
                        <div></div>
                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Category</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Status</p>
                        </div>
                        {books.map((book, i) => (
                            book.status === "Archived" ? <ArchivedList {...book} key={i} /> : <></>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
