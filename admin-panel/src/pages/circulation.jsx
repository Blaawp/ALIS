import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";

export default function Circulation() {

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-full flex-row">
                <SidePanel />
                <div className="my-5 flex h-full w-full flex-col items-center justify-center space-y-5 align-middle">
                    circulation
                </div>
            </div>
        </div>
    );
}
