'use client'
import Link from "next/link";
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
// import { useTheme } from "next-themes";
import React from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import ThemeSwitch from "./themeSwitch";
export default function Header()
{
    
    // const {theme, setTheme, systemTheme} = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme ;
    // console.log(`the current theme : ${currentTheme}`);
    /*function changeTheme()
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
    */
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

    // const smallerMenuStyles = 
    // {
    //     display:"flex"
    // }
    
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
      <header className='flex bg-sky-500 w-[90%] mx-auto mt-[80px] py-[22px] px-[20px] rounded-[25px] item-center justify-between'>
        <div>
          <h1 className="pl-[15px] text-[20px]">AlsonGard</h1>
        </div>

        <div className="pr-[15px] flex flex-row items-center justify-between  w-[50%]">
          <ul className='flex text-[20px] justify-between  w-[500px] flex-row items-center'>
            <li>
              <Link
                className="hover:text-white" 
                href="/"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                className="hover:text-white" 
                href="/projects"
                >
                  Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white" 
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white" 
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {/* darkmode icons */}
          <ThemeSwitch/>

        </div>

        <FiMenu className='hidden'/>

        {/* small menu  */}
        {/* <div className={clsx(smallVisible ? "block " : "hidden" , "smallerMenu min-[530px]:hidden  absolute right-[50px] top-[50px] bg-[#475569]  rounded-md flex flex-col py-[20px]  items-center" )}> */}
        <div className={clsx(smallVisible ? "block " : "hidden" , "smallerMenu min-[530px]:hidden  absolute right-[50px] top-[50px] bg-[#475569] w-[150px] rounded-md flex flex-col py-[20px]  items-center" )}>
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
            <li>
              <Link
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
    </header>
    )
}