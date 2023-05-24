import BookCard from "@/components/BookCard";
import DashboardHistory from "@/components/DashboardHistory";
import { AiOutlineSearch } from "react-icons/ai";
import Navigation from "@/components/Navigation";
import { books } from "@/data/books";

export default function dashboard() {
    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
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
                <div className="grid w-10/12 grid-cols-3 gap-4">
                    {books.map((book) => (
                        <BookCard {...book} />
                    ))}
                </div>
                <div className="flex w-10/12 flex-col text-black">
                    <h1 className="text-2xl font-bold">Latest Borrowed:</h1>
                    <div className="grid grid-cols-3 place-content-center">
                        <div></div>
                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Category</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Status</p>
                        </div>
                        {books.map((book) => (
                            <DashboardHistory {...book} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
