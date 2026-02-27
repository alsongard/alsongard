'use client'
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import ThemeSwitch from "./themeSwitch";
import {throttle} from "lodash";
import { usePathname } from 'next/navigation';

export default function Header()
{
	const [smallVisible, setSmallVisible] = React.useState(false);

	// SMALLER MENU FUNCTION
	function dispalySmallerMenu()
	{
		// console.log("I got clicked");
		// console.log(`Condition: ${smallVisible}`)
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
		// console.log(`Condition: ${smallVisible}`)
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
	}, []);
	const pathName = usePathname();

	return (
		<header id='header' className={clsx(headerSticky ? 'w-screen ' : "w-[90%] mx-auto rounded-[25px]", 'duration-[2] ease-in-out flex bg-sky-500   sticky top-0  mt-20 py-[22px] px-[20px] z-[1001]  items-center justify-between')}>
		{/* // <header id='header' className='bg-blue-500 '> */}
			<div>
				<h1 className="pl-3.75 text-[20px] max-lg:text-[18px]">AlsonGard</h1>
			</div>

			<div className="max-md:hidden flex flex-row items-center justify-evenly gap-x-[60px]  w-[60%]">
				<ul className='max-lg:text-[18px] flex text-[20px] justify-between  w-[500px] flex-row items-center'>
					<li>
						<Link
							className={clsx(pathName === "/" ? "text-blue-800" :  "", "hover:text-black")} 
							href="/"
						>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							className={clsx(pathName === "/about" ? "text-blue-800" : "", "hover:text-black")}
							href="/about"
						>
							About
						</Link>
					</li>
					<li>
						<Link 
							className={clsx(pathName === "/projects" ? "text-blue-800" : "", "hover:text-black")} 
							href="/projects"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							className={clsx(pathName === "/cybersec" ? "text-blue-800" : "", "hover:text-black")} 
							href="/cybersec"
						>
							CyberSec
						</Link>
					</li>
					<li>
						<Link
							className={clsx(pathName === "/contact" ? "text-blue-800" : "", "hover:text-black")} 
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>

				{/* darkmode icons */}
			</div>

			<FiMenu onClick={dispalySmallerMenu} className='hidden max-md:block'/>

			{/* small menu  */}
			{/*1 <div className={clsx(smallVisible ? "block " : "hidden" , "smallerMenu min-[530px]:hidden  absolute right-[50px] top-[50px] bg-[#475569]  rounded-md flex flex-col py-[20px]  items-center" )}> */}
			{/* 2 <div className={clsx(smallVisible ? "block " : "hidden" , "smallerMenu min-[530px]:hidden  absolute right-[50px] top-[50px] bg-[#475569] w-[150px] rounded-md flex flex-col py-[20px]  items-center" )}> */}
			<div className={clsx(smallVisible ? 'block' : 'hidden', 'smallerMenu   absolute right-[0] top-[55px] bg-[rgba(14,164,233,0.34)] w-[100%] rounded-md flex flex-col py-[20px]  items-center')}>
				<ul className="list-none  w-[80%] text-center"> 
					<li className="border-b-2 border-white w-[100%] mb-[10px]">
						<Link
							className="hover:text-black" 
							href="/"
						>
							Portfolio
						</Link>
					</li>
					<li className="border-b-2 border-white w-[100%] mb-[10px]">
						<Link 
							className="hover:text-black" 
							href="/projects"
						>
							Projects
						</Link>
					</li>
					<li className="border-b-2 border-white w-[100%] mb-[10px]">
						<Link
							className="hover:text-black" 
							href="/contact"
						>
							Contact
						</Link>
					</li>
					<li className="border-b-2 border-white w-[100%] mb-[10px]">
						<Link
							className="hover:text-black" 
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
