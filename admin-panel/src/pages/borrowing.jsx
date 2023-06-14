import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    const [dueDate, setDueDate] = useState(dayjs());
    const [borrowDate, setBorrowDate] = useState(dayjs());
    const [userId, setUserId] = useState("");

    const session = useAtomValue(sessionAtom);

    const submitBorrow = async (e) => {
        e.preventDefault();
        let res = await (
            await fetch(
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
            )
        ).json();

        console.log(res);
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
                    <button className="h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800">
                        BACK
                    </button>
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
                                <div className="h-full w-full bg-[#d9d9d9] text-right">
                                    <div className="flex flex-row p-4">
                                        <label className="w-1/2 pr-7">
                                            Barcode:
                                        </label>
                                        <input
                                            className="h-10 w-full p-5"
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
                                        <div className="bg-[#fdfdfd]">
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
                                            className="h-10 w-full p-5"
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
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
