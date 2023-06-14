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

export default function Inventory() {
    const [selectedBook, setSelectedBook] = useAtom(inventorySelectedBookAtom);

    useEffect(() => {
        return () => {
            setSelectedBook(null);
        };
    }, []);

    if (!!selectedBook) {
        return (
            <>
                <Navigation />
                <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                    <SearchBar />
                    <BigBookCard {...selectedBook} />
                </div>
            </>
        );
    }

    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-screen mt-5">
                <SidePanel />
                <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                    <SearchBar />

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

                    <div className="flex w-10/12 flex-row justify-end">
                        <BsFillPlusSquareFill color="black" size="50px" />
                    </div>
                </div>  
            </div>
        </div>
    );
}
