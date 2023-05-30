import BookCard from "@/components/BookCard";
import DashboardHistory from "@/components/DashboardHistory";
import Navigation from "@/components/Navigation";
import { books } from "@/data/books";
import SearchBar from "@/components/SearchBar";

export default function dashboard() {
    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                <SearchBar />
                <div className="grid w-10/12 grid-cols-3 gap-4">
                    {books.slice(0, 3).map((book, i) => (
                        <BookCard {...book} key={i} />
                    ))}
                </div>
                <div className="flex w-10/12 flex-col text-black">
                    <h1 className="text-2xl font-bold">Latest Borrowed:</h1>
                    <div className="grid grid-cols-3 gap-y-3 place-content-center">
                        <div></div>
                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Category</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Status</p>
                        </div>
                        {books.slice(0, 5).map((book, i) => (
                            <DashboardHistory {...book} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
