import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel"
import SearchBar from "@/components/SearchBar";
import { reports } from "@/data/reports";
import ReportList from "@/components/ReportList"

export default function Reports() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-screen mt-5">
                <SidePanel />
                <div className="mt-5 flex h-full w-full flex-col items-center space-y-8">
                    <SearchBar />
                    <div className="flex w-10/12 flex-col text-black">
                        <div className="grid grid-cols-4 gap-y-3 place-content-center">

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Student's Information</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Status</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Title of Book</p>
                            </div>

                            <div className="flex w-full flex-row items-center justify-center align-middle">
                                <p>Comments</p>
                            </div>

                            {reports.map((report, i) => (
                                <ReportList {...report} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
