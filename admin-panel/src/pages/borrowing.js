import Navigation from "@/components/Navigation";
import React, { useState } from "react"

export default function borrowing() {

    

    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                <h1>Borrowing Form</h1>
                <form action="/api/borrow" method="post">
                    <label htmlFor="bookid">Book ID</label>
                    <input type="text" id="bookid" name="bookBarcode" required />
                
                    <label htmlFor="studentid">Student ID</label>
                    <input type="text" id="studentid" name="userId" required />
                
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
