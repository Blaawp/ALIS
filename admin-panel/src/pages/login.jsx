import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import people_cropped from "@/assets/people-cropped.jpg";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { sessionAtom } from "../Store";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setSession = useSetAtom(sessionAtom);

    const navigate = useNavigate();

    const login = async () => {
        try {
            let res = await (
                await fetch(import.meta.env.VITE_API_URL + "/api/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: email + "@sti.edu.ph",
                        password
                    })
                })
            ).json();
            setSession(res);
            console.log(res);
            navigate("/dashboard");
        } catch (e) {
        } finally {
        }
    };

    return (
        <>
            <div className="flex h-screen flex-row">
                <div className="h-full w-3/4">
                    <img
                        src={people_cropped}
                        alt=" "
                        className="h-full w-full object-cover object-center"
                    ></img>
                    <div class="absolute left-24 top-44 z-10 mb-3 flex flex-col space-y-2 px-2 text-white">
                        <h4 class="mb-2 text-6xl font-semibold">
                            BE FUTURE-READY
                        </h4>
                        <h4 class="mb-2 text-6xl font-semibold">BE STI</h4>
                    </div>
                    <div className="bg-black-overlay w-3/4"></div>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center bg-[#fff200] p-4 align-middle">
                    <img src="/logo/sti.svg" alt=" " className="mb-12 w-2/4" />
                    <h1 className="mb-12 text-2xl font-bold text-blue-500">
                        A.L.I.S Login
                    </h1>
                    <div className="relative mb-2 w-full">
                        <input
                            className="h-10 w-full rounded-lg border bg-white pl-3 pr-8 text-base focus:outline-none"
                            type="text"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-slate-300 px-4 font-bold text-black">
                            @sti.edu.ph
                        </p>
                    </div>
                    <div className="relative mb-2 w-full">
                        <input
                            className="h-10 w-full rounded-lg border bg-white pl-3 pr-8 text-base focus:outline-none"
                            type="password"
                            placeholder="Password"
                            id="email"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-white px-4 font-bold text-black">
                            <FaEye color="black" />
                        </div>
                    </div>
                    <p className="mb-12 text-blue-500 underline">
                        Forgot Password?
                    </p>
                    <button
                        className="mb-4 w-3/4 rounded bg-blue-500 p-2 text-center font-bold"
                        onClick={login}
                    >
                        LOGIN
                    </button>
                    <p className="mb-2 text-sm text-black">
                        Don't have an account?
                    </p>
                    <button className="mb-12 w-3/4 rounded border-2 border-blue-500 p-2 font-bold text-blue-500">
                        SIGN UP
                    </button>
                    <p className="text-sm text-black">©2023 ALIS, Wala </p>
                </div>
            </div>
        </>
    );
}
