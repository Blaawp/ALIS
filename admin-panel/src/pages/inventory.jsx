import Navigation from "@/components/Navigation";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import { useAtom } from "jotai";
import { inventorySelectedBookAtom } from "../Store";
import { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import BigBookCard from "@/components/BigBookCard";
import SidePanel from "@/components/SidePanel";
import { Link } from "react-router-dom";

export default function Inventory() {
    const [selectedBook, setSelectedBook] = useAtom(inventorySelectedBookAtom);

    useEffect(() => {
        return () => {
            setSelectedBook(null);
        };
    }, []);

    if (!!selectedBook) {
        return (
            <div>
                <Navigation />
                <div className="mt-5 flex h-full flex-row">
                    <SidePanel />
                    <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                        <SearchBar />
                        <button onClick={() => setSelectedBook(null)} className="mx-auto mt-6 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            Back
                        </button>
                        <div className="h-4/5 w-3/5">
                            <BigBookCard {...selectedBook} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-full mt-5">
                <SidePanel />
                <div className="my-2 flex h-full w-full flex-col items-center justify-center space-y-10 align-middle">
                    <SearchBar />
                    <div className="flex flex-row gap-x-5">
                        <button className="mx-auto mt-6 h-8 w-36 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            General Education
                        </button>
                        <button className="mx-auto mt-6 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            Fiction
                        </button>
                        <button className="mx-auto mt-6 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            Thesis
                        </button>
                        <button className="mx-auto mt-6 h-8 w-40 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            General References
                        </button>
                        <button className="mx-auto mt-6 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            Filipiniana
                        </button>
                        <button className="mx-auto mt-6 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            STI Collection
                        </button>
                        <button className="mx-auto mt-6 h-8 w-44 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            Senior High Collection
                        </button>
                    </div>

                    <div className="flex flex-row justify-between w-5/6">
                        <h1 className="text-lg font-bold">
                            Total Books:
                        </h1>
                        <Link to="/addBook">
                            <BsFillPlusSquareFill color="black" size="40px" />

                        </Link>
                    </div>

                    <div className="grid w-10/12 grid-cols-3 gap-x-4 gap-y-5">
                        {books.map((book) => (
                            <BookCard
                                {...book}
                                onClick={() => {
                                    setSelectedBook(book);
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
