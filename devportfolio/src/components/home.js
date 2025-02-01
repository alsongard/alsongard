// import { FaTwitter } from "react-icons/fa";
// import {  FaLinkedin } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
import user_1 from "../images/user_1.jpg"

function Home()
{
    return (
        <section className="dark:bg-gradient-to-tl from-[rgb(93,109,126)] to-[rgb(33,47,60)] h-[95vh] ">
            <div className="pt-[30px]">
                <h1 className="text-center text-[33px] font-bold">Gard Alson</h1>
                <p className="text-center font-semibold">Full Stack Developer & PenTester</p>

                {/* short text for introduction */}
                <p className="text-center w-[70%] mx-auto">I am a versatile Full Stack Developer and PenTester with a passion for building robust web applications and ensuring their security. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences while safeguarding systems against vulnerabilities.</p>
                
                {/* icons for getting in touch */}
                {/* <div className="flex  flex-row justify-between w-[250px] h-[45px] my-[20px] mx-auto">
                    <div className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950 "><FaGithub className="text-[23px]"/></div>
                    <div className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950"><FaLinkedin className="text-[23px]"/></div>
                    <div className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950"><FaTwitter className="text-[23px]"/></div>
                </div> */}

                <div className="w-[330px] myImage mx-auto mt-[20px] h-[330px]">
                    <img  className=" w-[100%] h-[100%] rounded-full " src={user_1} alt="fullstack/hacker"/>
                </div>
            </div>
        </section>
    )
}

export default Home;