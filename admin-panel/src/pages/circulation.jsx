import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { Link } from "react-router-dom";
import { circulationBooks } from "@/data/books";
import BookCard from "@/components/BookCard";
import SearchBar from "@/components/SearchBar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function Circulation() {



    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-full mt-5">
                <SidePanel />
                <div className="my-2 flex h-full w-full flex-col items-center justify-center space-y-10 align-middle">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                    >
                        <div className="flex flex-row p-4 w-full justify-center">
                            <DatePicker
                                className="w-2/5 bg-white drop-shadow-lg"
                                value={dayjs('04/30/2023')}
                                format="MMMM DD YYYY"
                            />
                        </div>


                    </LocalizationProvider>
                    <div className="grid grid-flow-col w-10/12 grid-cols-3 grid-rows-3 gap-x-4 gap-y-5">
                        {circulationBooks.slice(0, 3).map((book) => (
                            <BookCard
                                {...book}
                                withStatus={true}
                                isCirculation={true}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
