import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { BiUpload } from "react-icons/bi";

export default function AddBook() {

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-screen flex-row">
                <SidePanel />
                <div className="flex h-full w-full flex-col">
                    <div className="flex flex-row">
                        <div className="w-full px-16">
                            <p className="pb-5 pl-10 mt-12  text-2xl font-bold">
                                Adding Book
                            </p>
                            <form
                                method="post"
                                className="flex flex-col"
                            >
                                <div className="flex flex-row h-full w-full bg-[#d9d9d9] font-bold">

                                    <div className="flex flex-col w-3/5 text-right space-y-4">
                                        <div className="flex flex-row pt-10">
                                            <label className="w-1/2 pr-7">
                                                Barcode:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text" required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Book Name:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text" required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Author:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text" required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Categories:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text" required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Publish Date:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text" required />
                                        </div>

                                        <div className="flex flex-row">
                                            <label className="w-1/2 pr-7">
                                                Loan Period:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text" required />
                                        </div>

                                        <div className="flex flex-row">
                                            <div className="flex flex-row justify-end ml-8">
                                                <label className="w-1/2 pr-7">
                                                    Level No.:
                                                </label>
                                                <input className="h-10 w-2/5 p-5 rounded-lg" type="text" required />
                                            </div>
                                            <div className="flex flex-row justify-end">
                                                <label className="w-1/2 pr-7">
                                                    Shelf No.:
                                                </label>
                                                <input className="h-10 w-2/5 p-5 rounded-lg" type="text" required />
                                            </div>
                                        </div>

                                        <div className="flex flex-row pb-4">
                                            <label className="w-1/2 pr-7">
                                                Book Information:
                                            </label>
                                            <textarea className="h-36 w-full p-1 rounded-lg font-normal" required />
                                        </div>

                                    </div>

                                    <div className="w-2/5 m-14 pl-20">
                                        <label className="w-1/2 pr-7">
                                            Image:
                                        </label>
                                        <button className="ml-5 h-56 w-56 bg-white flex flex-col">
                                            <BiUpload color="black" size={75} className="m-auto" />
                                        </button>
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="mx-auto mt-7 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800"
                                >
                                    ADD
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
