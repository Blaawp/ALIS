import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import SidePanel from "@/components/SidePanel";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function borrowing() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-screen mt-5">
                <SidePanel />
                <div className="flex h-full w-full flex-col p-5">
                    <button className="bg-[#006eb7] hover:bg-blue-800 text-white w-32 h-8 rounded-xl">
                        BACK
                    </button>
                    <div className="flex flex-row">
                        <div className="w-3/5">
                            <p className="text-2xl font-bold pt-10 pb-5 pl-10">Borrowing Book</p>
                            <form action="/api/borrow" method="post" className="flex flex-col">
                                <div className="bg-[#d9d9d9] h-full w-full text-right">
                                    <div className="flex flex-row p-4">
                                        <label className='w-1/2 pr-7'>Barcode: </label>
                                        <input className="h-10 w-full p-5" type="text" id="bookid" name="bookBarcode" required />
                                    </div>

                                    <div className="flex flex-row p-4">
                                        <label className="w-1/3 pr-7">Book Information: </label>
                                        <div className="bg-[#fdfdfd]">
                                            {/* BOOK CARD based on bar code */}
                                        </div>
                                    </div>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <div className="flex flex-row p-4">
                                            <label className='w-1/3 pr-7'>Date Borrowed: </label>
                                            <DatePicker className="bg-white rounded-md" />
                                        </div>

                                        <div className="flex flex-row p-4">
                                            <label className='w-1/3 pr-7'>Due Date</label>
                                            <DatePicker className="bg-white rounded-md" />
                                        </div>
                                    </LocalizationProvider>

                                    <div className="flex flex-row p-4">
                                        <label className='w-1/2 pr-7'>Student No.: </label>
                                        <input className="h-10 w-full p-5" type="text" id="studentid" name="userId" required />
                                    </div>
                                </div>

                                <button type="submit" className="bg-[#006eb7] hover:bg-blue-800 text-white w-32 h-8 rounded-xl mt-7 mx-auto">
                                    BORROW
                                </button>
                            </form>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
