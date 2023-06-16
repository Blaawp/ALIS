import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";

export default function Home() {

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="mt-5 flex h-screen w-full flex-col items-center space-y-10">

                    <div className="flex flex-row h-1/5 w-full justify-between">
                        <div className="bg-white drop-shadow-md h-4/5 w-2/5 mx-10 p-2">
                            <p className="w-full text-center">RULES AND REGULATIONS</p>
                            <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                            <div className="flex flex-row justify-between px-6">
                                <img className="" alt="lib pic"></img>
                                <div>asdasd</div>
                            </div>
                        </div>

                        <div className="bg-white drop-shadow-md h-4/5 w-3/5 mx-10 p-2">
                            <p className="w-full text-center">LIBRARY SERVICES</p>
                            <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white drop-shadow-md w-2/3 h-2/5 p-5">
                        <p className="w-full text-center">BORROWING & RETURNING OF BOOKS</p>
                        <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                        <ol type="1">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ol>
                    </div>

                    <div className="flex flex-col bg-white drop-shadow-md w-2/3 h-2/5 p-5">
                        <p className="w-full text-center">LIBRARY RULES & REGULATIONS</p>
                        <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                        <ol type="1">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    );
}
