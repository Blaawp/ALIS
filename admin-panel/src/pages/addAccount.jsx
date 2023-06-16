import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";
import { BiUpload } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function AddAccount() {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const submitAccount = async (e) => {
        e.preventDefault();
        try {
            let res = await (
                await fetch(import.meta.env.VITE_API_URL + "/api/users", {
                    method: "POST",
                    body: JSON.stringify({
                        first_name: fname,
                        middle_name: mname,
                        last_name: lname,
                        email,
                        password,
                        role: role === "Teacher" ? 2 : 3,
                        avatar_link: ""
                    })
                })
            ).json();

            console.log(res);
            alert("Account Registered");
        } catch (e) {
            console.error(e);
            alert("Error in Registering");
        }
    };

    return (
        <div>
            <Navigation />
            <div className="mt-5 flex h-screen flex-row">
                <SidePanel />
                <div className="flex h-full w-full flex-col">
                    <div className="flex flex-row">
                        <div className="w-full px-16">
                            <div className="flex flex-row justify-between">
                                <p className="pb-5 pl-10 mt-12  text-2xl font-bold">
                                    New Account
                                </p>
                                <Link to="/accounts" className="flex flex-row" >
                                    <CgFileDocument size={30} />
                                    <p className="ml-2 font-bold text-xl">Participants</p>
                                </Link>
                            </div>
                            <form method="post" className="flex flex-col">
                                <div className="flex flex-row h-full w-full bg-[#d9d9d9]">
                                    <div className="flex flex-col w-3/5 text-right space-y-4">
                                        <div className="flex flex-row pt-10">
                                            <label className="w-1/2 pr-7 font-bold">
                                                First Name:
                                            </label>
                                            <input
                                                className="h-10 w-full p-5 rounded-lg"
                                                type="text"
                                                value={fname}
                                                onChange={(e) =>
                                                    setFname(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="flex">
                                            <label className="w-1/2 pr-7 font-bold">
                                                Middle Name:
                                            </label>
                                            <input
                                                className="h-10 w-full p-5 rounded-lg"
                                                type="text"
                                                value={mname}
                                                onChange={(e) =>
                                                    setMname(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="flex">
                                            <label className="w-1/2 pr-7 font-bold">
                                                Last Name:
                                            </label>
                                            <input
                                                className="h-10 w-full p-5 rounded-lg"
                                                type="text"
                                                value={lname}
                                                onChange={(e) =>
                                                    setLname(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="flex">
                                            <label className="w-1/2 pr-7 font-bold">
                                                E-mail:
                                            </label>
                                            <input
                                                className="h-10 w-full p-5 rounded-lg"
                                                type="text"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="flex">
                                            <label className="w-1/2 pr-7 font-bold">
                                                Password:
                                            </label>
                                            <input
                                                className="h-10 w-full p-5 rounded-lg"
                                                type="text"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="flex">
                                            <label className="w-1/2 pr-7 font-bold">
                                                Role:
                                            </label>
                                            <Select
                                                className="mb-4 h-10 w-full p-5 rounded-lg bg-white"
                                                value={role}
                                                onChange={(e) =>
                                                    setRole(e.target.value)
                                                }
                                            >
                                                <MenuItem value="Teacher">
                                                    Teacher
                                                </MenuItem>
                                                <MenuItem value="Student">
                                                    Student
                                                </MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="w-2/5 m-14 pl-20">
                                        <label className="w-1/2 pr-7 font-bold">
                                            Image:
                                        </label>
                                        <button className="ml-5 h-56 w-56 bg-white flex flex-col">
                                            <BiUpload
                                                color="black"
                                                size={75}
                                                className="m-auto"
                                            />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mx-auto mt-7 h-8 w-32 rounded-xl bg-[#006eb7] text-white hover:bg-blue-800"
                                    onClick={submitAccount}
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
