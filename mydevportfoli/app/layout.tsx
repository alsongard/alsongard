import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { FaMoon } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="myshadow flex flex-row justify-between  bg-slate-600 h-[70px] items-center pl-[50px] pr-[70px]">
            <h1>AlsonGard</h1>

            <div className="flex  justify-between w-[500px] items-center">
                <ul className=" flex flex-row justify-between w-[75%] ">
                    <li>
                        <Link 
                            href="/"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>

                </ul>

                {/* icon for moon */}
                <div>
                    <FaMoon/>
                </div>
            </div>


        </header>
        {children}
        <footer className="dark:bg-gradient-to-tl from-[rgb(93,109,126)] to-[rgb(33,47,60)] py-[100px]">
                <div className="text-center">
                    <h2 className="text-[33px]" >AlsonGard</h2>
                    <p>Days become seconds, weeks become minutes, months become hours and years just days.</p>
                    <p>Pursuing every dream to become reality, building applications which aid in human activities and in a better world.</p>
                </div>
            <div className="flex mt-[40px] items-start justify-center gap-x-[200px] flex-row">
                <div>
                    <h1>AlsonGard</h1>
                    <ul>
                       <li className="hover:text-white hover:pl-[5px]"><Link href="">Home</Link></li>
                       <li className="hover:text-white hover:pl-[5px]"><Link href="">Projects</Link></li>
                       <li className="hover:text-white hover:pl-[5px]"><Link href="">Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-center">Contact</h1>
                    <div className="flex justify-between w-[200px] h-[40px] flex-row">
                        <Link className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" href="/"><FaXTwitter/></Link>
                        <Link className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" href="/"><FaGithub/></Link>
                        <Link className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" href="/"><BiLogoGmail/></Link>
                    </div>
                </div>
            </div>        
        </footer>
      </body>
    </html>
  );
}
