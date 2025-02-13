import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Footer()
{
    return (
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
                       <li className="hover:text-white hover:pl-[5px]"><Link to="">Home</Link></li>
                       <li className="hover:text-white hover:pl-[5px]"><Link to="">Projects</Link></li>
                       <li className="hover:text-white hover:pl-[5px]"><Link to="">Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-center">Contact</h1>
                    <div className="flex justify-between w-[200px] h-[40px] flex-row">
                        <Link className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" to="/"><FaXTwitter/></Link>
                        <Link className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" to="/"><FaGithub/></Link>
                        <Link className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950" to="/"><BiLogoGmail/></Link>
                    </div>
                </div>
            </div>        
        </footer>
    )
}
export default Footer;