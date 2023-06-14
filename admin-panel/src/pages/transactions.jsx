import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel"

export default function Transactions() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-row h-screen mt-5">
                <SidePanel />
            </div>
        </div>
    );
}
