import Navigation from "@/components/Navigation";

export default function BasePage({ children }) {
    return (
        <div className="h-screen bg-[#ededed]">
            <Navigation />
            {children}
        </div>
    );
}
