import Navigation from "@/components/Navigation";
import { notifications } from "@/data/notifications";
import NotificationList from "@/components/NotificationList";

export default function notification() {
    return (
        <>
            <Navigation />
            <div className="my-24 flex h-full w-full flex-col items-center justify-center space-y-12 align-middle">
                <div className="flex w-10/12 flex-col text-black">
                    <div className="grid grid-cols-4 gap-y-3 place-content-center">
                        
                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Student's Name</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Student ID</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Status</p>
                        </div>

                        <div className="flex w-full flex-row items-center justify-center align-middle">
                            <p>Title Of Books</p>
                        </div>

                        {notifications.map((noti, i) => (
                            <NotificationList {...noti} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
