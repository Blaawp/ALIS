import BookCard from "@/components/BookCard";
import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { books } from "@/data/books";
import SearchBar from "@/components/SearchBar";
import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { notifications } from "@/data/notifications";
import NotificationList from "@/components/NotificationList";
import BorrowCard from "@/components/BorrowCard";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [borrows, setBorrows] = useState([])

    useEffect(() => {
        const fetchBorrows = async () => {
            try {
                let res = await (
                    await fetch(
                        import.meta.env.VITE_API_URL + "/api/borrow_transactions"
                    )
                ).json();
                console.log(res)
                setBorrows(res)
            } catch (e) {
                console.error(e);
            }   
        };

        fetchBorrows();
    }, []);

    console.log(borrows)

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="my-5 flex h-full w-full flex-col items-center justify-center space-y-5 align-middle">
                    <SearchBar />
                    <div className="grid w-10/12 grid-cols-3 gap-4">
                        {books.slice(0, 3).map((book, i) => (
                            <BookCard {...book} withStatus={false} key={i} />
                        ))}
                    </div>
                    <div className="flex w-10/12 flex-col text-black">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-2xl font-bold">
                                Latest Borrowed:
                            </h1>
                            <Link to="/borrowing" className="flex flex-row">
                                <BiBookAdd size="40px" />
                                <p className="ml-2 text-xl font-bold">
                                    Borrow Book
                                </p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-4 place-content-center gap-y-3">
                            <div className=""></div>
                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Category</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Date Borrowed</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Status</p>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-4"> */}
                            {borrows.slice(0, 5).map((book, i) => (
                                <BorrowCard {...book} key={i} />
                            ))}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
