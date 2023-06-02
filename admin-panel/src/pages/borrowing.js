import Navigation from "@/components/Navigation";
import React, { useState } from "react"

export default function borrowing() {
    const [bookCode, setBookCode] = useState("");
    const [studentId, setStudentId] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        const formData = async () => {
            const data = {
                bookCode: bookCode,
                studentId: studentId,
            };
    
            const response = await fetch("/api/borrow", {
                method: "POST",
                body: JSON.stringify(data),
            });
            
            return response.json();
        };
        formData().then((data) => {
            alert(data.message);
        });
    }
  
    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                <h1>Borrowing Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="bookCode">Book Code</label>
                        <input
                            id="bookCode"
                            type="text"
                            value={bookCode}
                            onChange={(e) => setBookCode(e.target.value)}
                        />
                    </div>  
                    <div>
                        <label htmlFor="studentId">Student ID</label>
                        <input
                            id="studentId"
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
