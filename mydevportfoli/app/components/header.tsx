'use client'
import Link from "next/link";
import { FaMoon } from "react-icons/fa6";
import { useTheme } from "next-themes";
import React from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
export default function Header()
{
    
    const {theme, setTheme, systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme ;
    // console.log(`the current theme : ${currentTheme}`);
    function changeTheme()
    {
        if (theme == "dark")
        {
            setTheme("light")
        }
        else
        {
            setTheme("dark")
        }
    };

    const [stickyVar, setStickyVar] = React.useState(false);
    React.useEffect(()=>{
        const header= document.getElementById("header");
        // console.log(`Value of stickyVar : ${stickyVar}`);
        if (!header) return;
        const headerPosition = header.offsetTop;
 
        window.addEventListener('scroll', ()=>{
            // console.log("hello");
            setStickyVar(window.scrollY > headerPosition); // returns true on scroll
            // console.log(`After Value of stickyVar : ${stickyVar}`);
        })
        // unmount the listener when the component is unmounted
        // return ()=>{
        //     window.removeEventListener('scroll', ()=>{
        //         setStickyVar(window.scrollY > headerPosition); // returns true on scroll
        //     })
        // }
    }, []);

    const smallerMenuStyles = 
    {
        display:"flex"
    }
    
    const [smallVisible, setSmallVisible] = React.useState(false);
    function dispalySmallerMenu()
    {
        console.log("I got clicked");
        console.log(`Condition: ${smallVisible}`)
        setSmallVisible((prevValue)=>{
            if (!prevValue)
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        console.log(`Condition: ${smallVisible}`)


    }


    return (
        <header id='header' className={clsx(stickyVar ?  'border-b-2 border-white ' : 'border-none',  'opacity-[1001] text-white  flex flex-row justify-between sticky top-0  z-[1001] bg-slate-600 h-[70px] items-center pl-[50px] pr-[70px] ')}>
            
            <h1>AlsonGard</h1>
            <div className="flex  justify-between w-[500px] items-center max-[750px]:w-[300px]  max-[530px]:hidden ">
                <ul className=" flex  flex-row justify-between w-[75%] max-w  ">
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
                    <FaMoon className="" onClick={changeTheme}/>
                </div>
            </div>

            <div className="min-[531px]:hidden absolute right-[50px]">
                <FiMenu onClick={dispalySmallerMenu}/>
            </div>
            
            {/* small menu  */}
            <div className={clsx(smallVisible ? "block" : "hidden" , "smallerMenu min-[530px]:hidden  absolute right-[50px] top-[50px] bg-[#808b96] w-[150px] rounded-md flex flex-col py-[20px]  items-center" )}>
                <ul className="list-none">
                    <li>
                        <Link
                            className="hover:text-black" 
                            href="/"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="hover:text-black" 
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-black" 
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}