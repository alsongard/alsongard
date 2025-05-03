'use client'
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import ThemeSwitch from "./themeSwitch";
import {throttle} from "lodash";

export default function Header()
{
  const [smallVisible, setSmallVisible] = React.useState(false);

  // SMALLER MENU FUNCTION
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

  // STICKY HEADER
  const [headerSticky, setHeaderSticky] = React.useState(false);
  // set state to true if window scrolls
  React.useEffect(()=>{

    const handleScroll = throttle(()=>{
      setHeaderSticky(()=>{
        return window.pageYOffset > 0;
      })
    }, 100)
    // function handleScroll()
    // {
    //   setHeaderSticky(()=>{
    //     return window.pageYOffset > 0;
    //   })
    // }
    window.addEventListener('scroll', handleScroll)
    return ()=>{window.removeEventListener('scroll', handleScroll)}
  }, [])
    return (
      <header id='header' className={clsx(headerSticky ? 'w-[100vw]' : "w-[90%] rounded-[25px]", 'flex bg-sky-500  sticky top-0 mx-auto mt-[80px] py-[22px] px-[20px]  item-center justify-between')}>
        <div>
          <h1 className="pl-[15px] text-[20px]">AlsonGard</h1>
        </div>

        <div className="pr-[15px] flex flex-row items-center justify-between  w-[50%]">
          <ul className='flex text-[20px] justify-between  w-[500px] flex-row items-center'>
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
                className="hover:text-black" 
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