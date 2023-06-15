import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { BiUpload } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function AddAccount() {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const submitAccount = async (e) => {
        e.preventDefault();
        let res = await (
            await fetch(
                import.meta.env.VITE_API_URL + "/api/borrow_transactions",
                {
                    method: "POST",
                    body: JSON.stringify({
                    })
                }
            )
        ).json();
    };

    useEffect(() => {

    }, []);

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-screen flex-row">
                <SidePanel />
                <div className="flex h-full w-full flex-col">
                    <div className="flex flex-row">
                        <div className="w-full px-16">
                            <div className="flex flex-row justify-content">
                                <p className="pb-5 pl-10 mt-12  text-2xl font-bold">
                                    New Account
                                </p>
                                <CgFileDocument />
                            </div>
                            <form
                                method="post"
                                className="flex flex-col"
                            >
                                <div className="flex flex-row h-full w-full bg-[#d9d9d9] font-bold">

                                    <div className="flex flex-col w-3/5 text-right space-y-4">
                                        <div className="flex flex-row pt-10">
                                            <label className="w-1/2 pr-7">
                                                First Name:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text"
                                                value={fname}
                                                onChange={(e) =>
                                                    setAccNo(e.target.value)
                                                } required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Middle Name:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text"
                                                value={mname}
                                                onChange={(e) =>
                                                    setUsername(e.target.value)
                                                } required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Last Name:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text"
                                                value={lname}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                } required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                E-mail:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text"
                                                value={email}
                                                onChange={(e) =>
                                                    setUserStatus(e.target.value)
                                                } required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Password:
                                            </label>
                                            <input className="h-10 w-full p-5 rounded-lg" type="text"
                                                value={password}
                                                onChange={(e) =>
                                                    setUserNumber(e.target.value)
                                                } required />
                                        </div>

                                        <div className="flex flex">
                                            <label className="w-1/2 pr-7">
                                                Role:
                                            </label>
                                            <Select
                                                className="mb-4"
                                                value={role}
                                                onChange={(e) =>
                                                    setRole(e.target.value)
                                                }
                                            >
                                                <MenuItem value="Teacher">Teacher</MenuItem>
                                                <MenuItem value="Student">Student</MenuItem>
                                            </Select>
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
                                    onclick={submitAccount}
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
