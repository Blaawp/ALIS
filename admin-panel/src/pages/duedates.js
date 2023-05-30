import Navigation from "@/components/Navigation";
import { dues } from "@/data/dues";
import DueDateList from "@/components/DueDateList";

export default function duedates() {
    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                <div className="flex w-10/12 flex-col text-black">
                    <div className="grid grid-cols-4 gap-y-3 place-content-center">
                        
                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Student's Information</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Status</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Title of Books</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Due Date</p>
                        </div>

                        {dues.map((duedate, i) => (
                            <DueDateList {...duedate} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
