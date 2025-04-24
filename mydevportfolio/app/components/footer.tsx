import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import React from 'react'
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-[rgb(93,109,126)] to-[rgb(33,47,60)] py-[100px] dark:bg-black dark:text-white">
        <div className="text-center  max-[740px]:px-[15px]">
            <h2 className="text-[33px]" >AlsonGard</h2>
            <p>Days become seconds, weeks become minutes, months become hours and years just days. <br className="max-[740px]:hidden"/> Pursuing every dream to become reality, building applications which aid in human activities and in a better world.</p>
        </div>
        <div className="flex mt-[40px] items-start justify-center gap-x-[200px] flex-row">
            <div>
                <h1>AlsonGard</h1>
                <ul>
                    <li className="hover:text-white hover:pl-[5px]"><Link href="/">Home</Link></li>
                    <li className="hover:text-white hover:pl-[5px]"><Link href="/projects">Projects</Link></li>
                    <li className="hover:text-white hover:pl-[5px]"><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
            <h1 className="text-center">Contact</h1>
                <div className="flex flex-row justify-between w-[200px]  items-center flex-wrap max-[510px]:h-[auto] max-[510px]:w-[50px] max-[510px]:flex-col max-[510px]:gap-y-[10px] ">
                    <a target="_blank" className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" href="https://x.com/alsongadizo"><FaXTwitter/></a>
                    <a target="_blank" className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" href="http://github.com/alsongard"><FaGithub/></a>
                    <a target="_blank" className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" href="mailto:alsongadizo@gmail.com"><BiLogoGmail/></a>
                </div>
            </div>
        </div>        
</footer>
  )
}
