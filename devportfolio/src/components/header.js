import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
function Header({darkModeNew, setDarkModeNew})
{
    function darkBg()
    {
        setDarkModeNew((darkModeNew)=>{
            console.log(darkModeNew);
            const result = !darkModeNew;
            return result;
        })
    }
    return (
        <header className="myshadow flex flex-row justify-between  bg-slate-600 h-[70px] items-center pl-[50px] pr-[70px]">
            <h1>ETERNITY</h1>

            <div className="flex  justify-between w-[500px] items-center">
                <ul className=" flex flex-row justify-between w-[75%] ">
                    <li>
                        <NavLink 
                            to="/"
                            className={({isActive})=>
                                isActive ? "text-white" : "text-blac"
                            }
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/projects"
                            className={({isActive})=>
                                isActive ? "text-white" : "text-blac"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=>
                                isActive ? "text-white" : "text-blac"
                            }
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>

                {/* icon for moon */}
                <div onClick={darkBg}>
                    <FaMoon/>
                </div>
            </div>


        </header>
    )
}
export default Header;