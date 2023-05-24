import Head from "next/head";
import { Inter } from "next/font/google";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>ALIS</title>
                <meta name="ALIS" content="Library Application" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${inter.className} flex h-screen flex-row`}>
                <div className="h-full w-3/4">
                    <img
                        src="/people-cropped.jpg"
                        alt=" "
                        className="h-full w-full object-cover object-center"
                    ></img>
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
                        />
                        <p className="absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-slate-300 px-4 font-bold text-black">
                            @sti.edu.ph
                        </p>
                    </div>
                    <div className="relative mb-2 w-full">
                        <input
                            className="h-10 w-full rounded-lg border bg-white pl-3 pr-8 text-base focus:outline-none"
                            type="text"
                            placeholder="Password"
                            id="email"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-white px-4 font-bold text-black">
                            <FaEye color="black" />
                        </div>
                    </div>
                    <p className="mb-12 text-blue-500 underline">
                        Forgot Password?
                    </p>
                    <Link
                        href="/dashboard"
                        className="mb-4 w-3/4 rounded bg-blue-500 p-2 text-center font-bold"
                    >
                        LOGIN
                    </Link>
                    <p className="mb-2 text-sm text-black">
                        Don't have an account?
                    </p>
                    <button className="mb-12 w-3/4 rounded border-2 border-blue-500 p-2 font-bold text-blue-500">
                        SIGN UP
                    </button>
                    <p className="text-sm text-black">©2023 ALIS, Wala </p>
                </div>
            </main>
        </>
    );
}
