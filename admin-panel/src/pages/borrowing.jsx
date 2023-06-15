import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Link } from "react-router-dom";

import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

import BookCard from "../components/BookCard";
import { useAtomValue } from "jotai";
import { sessionAtom } from "../Store";
import dayjs from "dayjs";

export default function borrowing() {
    const [barcode, setBarcode] = useState("");
    const [debouncedValue] = useDebounce(barcode, 500);
    const [displayedBook, setDisplayedBook] = useState(null);
    const [dueDate, setDueDate] = useState(dayjs().add(7, "day"));
    const [borrowDate, setBorrowDate] = useState(dayjs());
    const [userId, setUserId] = useState("");
    const [borrowRes, setBorrowRes] = useState(null);

    const session = useAtomValue(sessionAtom);

    const submitBorrow = async (e) => {
        e.preventDefault();
        try {
            let unparsed = await fetch(
                import.meta.env.VITE_API_URL + "/api/borrow_transactions",
                {
                    method: "POST",
                    body: JSON.stringify({
                        bookBarcode: parseInt(barcode),
                        userId,
                        librarianId: session.user.id,
                        dueDate,
                        borrowDate
                    })
                }
            );

            let res = await unparsed.json();

            console.log(res);
            if (unparsed.status !== 200) {
                return;
            }

            setBorrowRes(res);

            setBarcode("");
            setDueDate(dayjs().add(7, "day"));
            setBorrowDate(dayjs());
            setUserId("");
            alert("Book Borrowed");
        } catch (e) {}
    };

    useEffect(() => {
        const fetchBook = async () => {
            if (debouncedValue.trim() === "") {
                return;
            }
            try {
                let res = await (
                    await fetch(
                        import.meta.env.VITE_API_URL + "/api/books/" + barcode
                    )
                ).json();

                if (res.length > 0) {
                    setDisplayedBook(res[0]);
                    console.log(res[0]);
                } else {
                    setDisplayedBook(null);
                }
            } catch (e) {
                console.error(e);
                setDisplayedBook(null);
            }
        };

        fetchBook();
    }, [debouncedValue]);

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-screen flex-row">
                <SidePanel />
                <div className="flex h-full w-full flex-col p-5">
                    <Link to="/dashboard">
                        <button className="h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                            BACK
                        </button>
                    </Link>
                    <div className="flex flex-row">
                        <div className="w-3/5">
                            <p className="pb-5 pl-10 pt-10 text-2xl font-bold">
                                Borrowing Book
                            </p>
                            <form
                                action="/api/borrow"
                                method="post"
                                className="flex flex-col"
                            >
                                <div className="h-full w-full bg-[#d9d9d9]">
                                    <div className="flex flex-row p-4">
                                        <label className="w-1/2 pr-7">
                                            Barcode:
                                        </label>
                                        <input
                                            className="h-10 w-full p-5 rounded-lg"
                                            type="text"
                                            id="bookid"
                                            name="bookBarcode"
                                            value={barcode}
                                            onChange={(e) =>
                                                setBarcode(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-row p-4">
                                        <label className="w-1/3 pr-7">
                                            Book Information:{" "}
                                        </label>
                                        <div className="bg-[#fdfdfd] w-2/3 rounded-lg">
                                            <BookCard
                                                {...displayedBook}
                                                empty={!displayedBook}
                                            />
                                        </div>
                                    </div>

                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <div className="flex flex-row p-4">
                                            <label className="w-1/3 pr-7">
                                                Date Borrowed:
                                            </label>
                                            <DatePicker
                                                className="rounded-md bg-white"
                                                value={borrowDate}
                                                onChange={(e) =>
                                                    setBorrowDate(e)
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-row p-4">
                                            <label className="w-1/3 pr-7">
                                                Due Date
                                            </label>
                                            <DatePicker
                                                className="rounded-md bg-white"
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e)}
                                            />
                                        </div>
                                    </LocalizationProvider>

                                    <div className="flex flex-row p-4">
                                        <label className="w-1/2 pr-7">
                                            Student No.:
                                        </label>
                                        <input
                                            className="h-10 w-full p-5 rounded-lg"
                                            type="text"
                                            id="studentid"
                                            name="userId"
                                            required
                                            value={userId}
                                            onChange={(e) =>
                                                setUserId(
                                                    parseInt(e.target.value)
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mx-auto mt-7 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800"
                                    onClick={submitBorrow}
                                >
                                    BORROW
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-col h-full w-2/5 px-6">
                            <div className="bg-[#d9d9d9] mx-auto mt-24 h-1/2 w-full pt-6">
                                {borrowRes !== null ? (
                                    <div className="bg-[#fdfdfd] h-content w-4/5 rounded-lg flex flex-col m-auto p-2">
                                        <div>
                                            Student No: {borrowRes.user.id}
                                        </div>
                                        <div>
                                            Name:{" "}
                                            {borrowRes.user.first_name +
                                                " " +
                                                borrowRes.user.last_name}
                                        </div>
                                        <div>
                                            Date Borrowed:{" "}
                                            {dayjs(
                                                borrowRes.borrowTransaction
                                                    .created_at
                                            ).format("MMMM DD, YYYY")}
                                        </div>
                                        <div>
                                            Due Date:{" "}
                                            {dayjs(
                                                borrowRes.borrowTransaction
                                                    .due_date
                                            ).format("MMMM DD, YYYY")}
                                        </div>
                                        <BookCard
                                            {...displayedBook}
                                            empty={!displayedBook}
                                            withStatus={true}
                                            status={"Borrowed"}
                                        />
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            {borrowRes !== null ? (
                                <button
                                    onClick={() => setBorrowRes(null)}
                                    className="mx-auto mt-6 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800"
                                >
                                    New Transaction
                                </button>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
