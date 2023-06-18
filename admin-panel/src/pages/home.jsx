import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import libpic from "@/assets/libpic.jpg";

export default function Home() {

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="mt-5 flex h-screen w-full flex-col items-center space-y-8">
                    <div className="flex flex-row h-full w-full justify-between">
                        <div className="bg-white drop-shadow-md h-full w-2/5 mx-10 p-2">
                            <p className="w-full text-center font-bold text-lg">RULES AND REGULATIONS</p>
                            <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                            <div className="flex flex-row px-6">
                                <img className="object-cover w-1/2 mt-4 ml-3" src={libpic} alt="lib pic"></img>
                                <div className="flex flex-col items-left text-sm pl-5 justify-center mt-10">
                                    <p className="font-bold">LIBRARY HOURS</p>
                                    <p>Monday - Friday</p>
                                    <p>8:00am - 4:00pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white drop-shadow-md h-full w-3/5 mx-10 p-2">
                            <p className="w-full text-center font-bold text-lg">LIBRARY SERVICES</p>
                            <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                            <div className="flex flex-col mt-4 items-center">
                                <p className="font-bold text-center text-sm">LIBRARY PROVIDES THE FOLLOWING SERVICES TO ITS LEADER</p>
                                <ul className="list-disc w-2/3 mb-4">
                                    <li>Internet and WIFI Services</li>
                                    <li>Referral Rervices</li>
                                    <li>Readers Services</li>
                                    <li>Visiting Researchers (for non STI Students)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white drop-shadow-md w-2/3 h-full p-5">
                        <p className="w-full text-center font-bold text-lg">BORROWING & RETURNING OF BOOKS</p>
                        <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                        <ol className="list-decimal text-sm px-10 py-4 font-semibold">
                            <li>An ALIS Account is required for all the library transactions.</li>
                            <li>All library users must apply for the ALIS before they can be borrowed from the library.</li>
                            <li>The use of ALIS is non-transferable.</li>
                            <li>A student can borrow a maximum of three (3) books at a time but can only borrow two (2) fiction books at a time.</li>
                            <li>Loan period for are as follows:
                                <ul className="list-disc pl-8">
                                    <li>General Education Books - Overnight (1 Day)</li>
                                    <li>Fiction Books – One Week</li>
                                    <li>Thesis, References & Periodicals- Library Use Only</li>
                                </ul>
                            </li>
                            <li>The borrower is accountable for safekeeping of the book/s during the period of the loan.</li>
                            <li>The overdue fine is Php 5.00 for each book per day.</li>
                            <li>Lost of book must be reported to the librarian as soon as possible.</li>
                        </ol>
                    </div>

                    <div className="flex flex-col bg-white drop-shadow-md w-2/3 h-full p-5">
                        <p className="w-full text-center font-bold text-lg">LIBRARY RULES & REGULATIONS</p>
                        <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                        <ol className="list-decimal text-sm px-10 py-4 font-semibold">
                            <li>Silence should be observed inside the library at all times.</li>
                            <li>An A.L.I.S. Account is required for all the library transactions.</li>
                            <li>All library users should log in the library's attendance upon entering and before leaving the library.</li>
                            <li>Mobile phones and other electronic gadgets must be turned to silent mode. Phone calls must be answered outside the library.</li>
                            <li>Wearing of proper uniform is required for all library users. Wearing of caps, bandanas, shades and earrings (for male students) are not allowed.</li>
                            <li>Eating, smoking, grooming, running and sleeping are not allowed Inside the library.</li>
                            <li>Playing of video games and board games are not allowed inside the library. & Laptops and electronic gadgets can be used inside the library. However, the library will not be liable for any losses.</li>
                            <li>Charging of gadgets are not allowed in the library.</li>
                            <li>Library furniture (l.e., tables, chairs, etc.) are not allowed to be relocated or transferred to another place.</li>
                            <li>Public display of affection (PDA), discourtesy, disrespecting authority and any unethical actions will not be tolerated Inside the library and is subject to appropriate disciplinary actions.</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    );
}
