import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { useState, useEffect } from 'react';
import SearchBar from "@/components/SearchBar";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import { useNavigate, Link } from "react-router-dom";
import mapsnip from "@/assets/map-snip.png";

export default function Cataloging({
    view = 1
}) {

    // 1 = cataloging, 2 = searching, 3 = searched

    const navigate = useNavigate();

    if (view == 2) {
        return (
            <div>
                <Navigation />
                <div className="mt-5 flex h-full flex-row">
                    <SidePanel />
                    <div className="my-5 flex h-full w-full flex-col items-center justify-center space-y-5 align-middle">
                        <SearchBar text="When Blood Meets Earth" />
                        <div className="flex flex-col items-center space-y-4">
                            {books.slice(0, 3).map((book) => (
                                <BookCard {...book} isCatalog={true} onClick={() => { navigate('/cataloging/searched'); }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    if (view == 3) {
        return (
            <div>
                <Navigation />
                <div className="mt-5 flex h-full flex-row">
                    <SidePanel />
                    <div className="my-5 flex h-full w-full flex-col space-y-5 px-6">
                        <Link to="/cataloging">
                            <button className="h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                                BACK
                            </button>
                        </Link>
                        <div className="flex flex-row w-full">
                            <div className="flex flex-col w-3/5 px-6">
                                <div className="flex flex-row w-full rounded-md bg-white p-4 text-black border-2 border-gray-200">
                                    <img className="my-4 w-1/4 object-cover" src={'/books/book1.jpg'} alt=" " />
                                    <div className="ml-6 mt-6 flex w-3/4 flex-col">
                                        <div className="flex flex-row items-center justify-between">
                                            <p className="text-xl">Title</p>
                                        </div>
                                        <p className="mb-2 mt-6 text-3xl font-bold">When Blood Meets Earth</p>
                                    </div>
                                </div>
                                <button className="flex flex-row justify-between px-4 pt-1 mt-4 mx-auto h-10 w-2/6 rounded-3xl bg-[#006EB7] text-[#A59F0B]">
                                    <p className="text-xl text-white">STATUS: </p> <p className="text-xl text-[#0CF56A]">AVAILABLE</p>
                                </button>
                                <p className="text-center mt-6 text-xl font-semibold">BOOK INFORMATION</p>
                                <div className="flex flex-col w-full rounded-md bg-white p-4 text-black border-2 border-gray-200">
                                    <div className="flex flex-row w-full">
                                        <p className="w-1/5 font-bold text-right mr-5">Author: </p> <p>E.A. Noble</p>
                                    </div>
                                    <p className="w-4/5 text-left mx-auto">
                                        Synompys kuno pero mema lang to kase wala akong maisip ilagay daming white space so dadamihan ko pa ang kamemahan kase dami pang white space
                                    </p>
                                    <div className="flex flex-row w-full">
                                        <p className="w-1/5 font-bold text-right mr-5">Category: </p> <p>Fiction</p>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <p className="w-1/5 font-bold text-right mr-5">Level No.: </p> <p>3</p>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <p className="w-1/5 font-bold text-right mr-5">Shelf No.: </p> <p>1</p>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <p className="w-1/5 font-bold text-right mr-5">Loan Period: </p> <p>One Week</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 px-6 flex flex-col items-center">
                                <p className="text-xl font-bold">MAP</p>
                                <img className="my-4 w-4/5 object-cover border-4 border-black" src={mapsnip} alt="Library Map" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="my-5 flex h-full w-full flex-col items-center justify-center space-y-5 align-middle">
                    <SearchBar isCatalog={true} />
                    <div className=" w-5/6 h-screen flex flex-row justify-between">
                        <div className="w-2/5 h-1/3 justify-center bg-[#f6f6f6] drop-shadow-lg p-6">
                            <p className="w-full text-center font-bold">RULES AND REGULATIONS</p>
                            <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                        </div>
                        <div className="flex flex-col w-2/5 h-full space-y-2 font-bold">
                            <p className="w-full text-center font-bold">CATEGORIES</p>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#3F3D56] text-[#847CE1]">
                                General Education
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#0CF56A] text-[#197D41]">
                                Fiction
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#0B90E9] text-[#10476C]">
                                Thesis
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#FFF501] text-[#A59F0B]">
                                General Reference Collection
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#555555] text-[#131313]">
                                Periodical Collection
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#3F3D56] text-[#847CE1]">
                                Filipiniana
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#0CF56A] text-[#197D41]">
                                Senior High Collection
                            </button>
                            <button className="mx-auto h-10 w-5/6 rounded-xl bg-[#0B90E9] text-[#10476C]">
                                STI Collection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
