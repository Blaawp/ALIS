import Navigation from "@/components/Navigation";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { books } from "@/data/books";
import ArchivedList from "@/components/ArchivedList";
import SidePanel from "@/components/SidePanel";

export default function Archives() {
    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="my-5 flex h-full w-full flex-col items-center space-y-4">
                    <SearchBar />
                    <p className="ml-28 font-bold text-lg self-start">Archived Books</p>
                    <div className="flex w-10/12 flex-col text-black">
                        <div className="grid grid-cols-3 gap-y-3 place-content-center">
                            <div></div>
                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Category</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Status</p>
                            </div>
                            {books.map((book, i) =>
                                book.status === "Archived" ? (
                                    <ArchivedList {...book} key={i} />
                                ) : (
                                    <></>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
