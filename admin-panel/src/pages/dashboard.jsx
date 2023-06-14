import BookCard from "@/components/BookCard";
import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { books } from "@/data/books";
import SearchBar from "@/components/SearchBar";
import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { notifications } from "@/data/notifications";
import NotificationList from "@/components/NotificationList";

export default function Dashboard() {
    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-screen flex-row">
                <SidePanel />
                <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-5 align-middle">
                    <SearchBar />
                    <div className="grid w-10/12 grid-cols-3 gap-4">
                        {books.slice(0, 3).map((book, i) => (
                            <BookCard {...book} key={i} />
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
                            <div></div>
                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Category</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Date Borrowed</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Status</p>
                            </div>
                            {notifications.slice(0, 5).map((notif, i) => (
                                <NotificationList {...notif} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
