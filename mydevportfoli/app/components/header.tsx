import Link from "next/link";
import { FaMoon } from "react-icons/fa6";


export default function Header()
{
    return (
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
    )
}