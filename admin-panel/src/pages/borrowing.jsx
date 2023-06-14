import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import SidePanel from "@/components/SidePanel";

export default function borrowing() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-screen mt-5">
                <SidePanel />
                <div className="flex h-full w-full flex-col p-5">
                    <button class="bg-[#006eb7] hover:bg-blue-800 text-white w-32 h-8 rounded-xl">
                        BACK
                    </button>
                    <div className="flex flex-row">
                        <div className="w-3/5">
                            <p className="text-2xl font-bold pt-10 pb-5 pl-10">Borrowing Book</p>
                            <form action="/api/borrow" method="post" className="flex flex-col">
                                <div className="bg-[#d9d9d9] h-full w-full">
                                    <div className="flex flex-row p-4">
                                        <label htmlFor="bookid" className='w-1/3'>Barcode: </label>
                                        <input type="text" id="bookid" name="bookBarcode" required />
                                    </div>

                                    <div className="flex flex-row p-4">
                                        <p className="w-1/3">Book Information: </p>
                                        <div className="bg-[#fdfdfd]">
                                            asd
                                        </div>
                                    </div>

                                    <div className="flex flex-row p-4">
                                        <label htmlFor="studentid" className='w-1/3'>Date Borrowed: </label>
                                        <input type="text" id="studentid" name="userId" required />
                                    </div>

                                    <div className="flex flex-row p-4">
                                        <label htmlFor="studentid" className='w-1/3'>Due Date</label>
                                        <input type="text" id="studentid" name="userId" required />
                                    </div>

                                    <div className="flex flex-row p-4">
                                        <label htmlFor="studentid" className='w-1/3'>Student No.: </label>
                                        <input type="text" id="studentid" name="userId" required />
                                    </div>
                                </div>

                                <button type="submit" className="p-5">Submit</button>
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
