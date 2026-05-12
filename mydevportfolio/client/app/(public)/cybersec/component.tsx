'use client';
import { useState } from "react";
import clsx from "clsx";
import HackImageV1 from "@/public/images/hacking-background-version1.jpg";

export default function CyberComponent()
{
     const [displayHackTheBox, setDisplayHackTheBox] = useState(true);
    const [displayTryHackMe, setDisplayTryHackMe] = useState(false);
    const [displayCiscoCerts, setDisplayCiscoCerts] = useState(false);


    const handleTryHackMe = ()=>{
        setDisplayTryHackMe((prevValue)=>!prevValue);
        setDisplayHackTheBox(false);
        setDisplayCiscoCerts(false);
    };
    const handleHackTheBox = ()=>{
        setDisplayHackTheBox((prevValue)=>!prevValue);
        setDisplayTryHackMe(false);
        setDisplayCiscoCerts(false);
    };
    const handleCiscoNetcad = ()=>{
        setDisplayCiscoCerts((prevValue)=>!prevValue);
        setDisplayHackTheBox(false);
        setDisplayTryHackMe(false);
    }

    return (
        <section className=" theHackContainer border-2 border-white my-[100px] w-full ">
            <div className=" flex flex-row mx-auto w-3/4 p-[20px] m-[20px] rounded-md border-2 border-red-500 bg-[#161515ea] gap-x-[50px] items-start">
                
                {/* button and header container */}
                <div className="bg-[#211918] rounded-md flex flex-col gap-y-[10px] h-[400px] p-[50px]  w-[400px] ">
                    <h1 className="text-center font-bold">CyberSecurity OPS</h1>
                    <button onClick={handleHackTheBox} className="bg-[#57534D] rounded-md py-[5px] px-[5px] w-full block hover:border-2 hover:border-red-500 ">Hack The Box Labs</button>
                    <button onClick={handleTryHackMe} className="bg-[#57534D] rounded-md py-[5px] px-[5px] w-full block hover:border-2 hover:border-red-500">Try HackMe Labs</button>
                    <button onClick={handleCiscoNetcad} className="bg-[#57534D] rounded-md py-[5px] px-[5px] w-full block hover:border-2 hover:border-red-500">Cisco NetCad Academy</button>
                </div>

                {/* display view achievements container */}
                <div className=" rounded-md   w-full border-2 border-[#0bf493] " >

                    {/* hack the box achievements */}
                    <div className="">
                        <div className="text-left">
                            <h3 className='bg-slate-500 opacity-[0.8] text-[20px]'>Completed Modules</h3>
                        </div>

                        <ul className={clsx(displayHackTheBox ? "block": "hidden", "list-disc pl-[20px] py-[10px] space-y-[10px]")}>
                            <li className="text-left">Intro to Academy</li>
                            <li>Linux Fundamentals</li>
                            <li>Web Requests</li>
                            <li>Javascript Deobsufication</li>
                            <li>Window Fundamentals</li>
                        </ul>

                        <ul className={clsx(displayTryHackMe ? "block": "hidden", "list-disc pl-[20px] py-[10px] space-y-[10px]")}>
                            <li className="text-left">Advent of Cyber 2023</li>
                        </ul>

                        <ul className={clsx(displayCiscoCerts ? "block": "hidden", "list-disc pl-[20px] py-[10px] space-y-[10px]")}>
                            <li>Network Security Certificate</li>
                            <li>NDG Linux Essentials Certificate</li>
                            <li>CyberSecurity Essentials Certificate</li>
                            <li>NDG Linux Unhatched Certificate</li>
                        </ul>
                        
                    </div>

                    {/* try hackme achievements */}
                    <div>

                    </div>

                    {/* Cisco NetCad achievements */}
                    <div>
                    </div>
                </div>

            </div>
        </section>
    )
}