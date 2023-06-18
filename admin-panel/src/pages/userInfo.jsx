import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel"
import SearchBar from "@/components/SearchBar";
import { reports } from "@/data/reports";
import ReportList from "@/components/ReportList"

export default function UserInfo() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-screen mt-5">
                <SidePanel />
                <div className="mt-5 flex h-full w-full flex-col items-center space-y-8">
                    <div className="flex flex-col items-center h-3/4 w-2/5 bg-white drop-shadow-lg mt-5 pt-16 space-y-4">
                        <img className="h-1/5 w-1/5 object-cover" src="/icons/user.png" alt=" " />
                        <button className="pr-16 w-full text-right text-blue-500">Edit</button>
                        <div className="pl-16 w-full text-left font-bold">Name:</div>
                        <div className="pl-16 w-full text-left">Account Number:</div>
                        <div className="pl-16 w-full text-left">Position:</div>
                        <div className="pl-16 w-full text-left">Number:</div>
                        <div className="pl-16 w-full text-left">Email:</div>
                        <div className="w-full text-center pt-8">STI COLLEGE CALOOCAN</div>
                        <hr className="w-5/6 h-0.5 mx-auto bg-yellow-300"></hr>
                    </div>
                </div>
            </div>
        </div>
    );
}
