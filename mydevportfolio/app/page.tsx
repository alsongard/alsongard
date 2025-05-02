import user_1 from "../public/images/user_1.jpg"
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";

export const metadata = {
  title: "AlsonGard",
  description: "home page"
}


export default function Home() {
  return (
    <main className="w-[100vw]"> 

      {/* IMAGE CONTAINER */}
      <div className="flex flex-row  items-start justify-evenly gap-x-[30px] my-[50px] w-[90%] mx-auto  py-[70px]  ">
        <div className="">
          <Image className="rounded-[100%]" width={450}  height={550} src="/images/anime_2.jpg" alt=""/>
        </div>

        <div className='pt-[50px] pl-[5px] text-white '>
          <p className='text-[20px]'><span className='text-[60px] pr-0'>H</span>i there <span className="dot"></span> <span className="dot"></span> <span className="dot"></span> </p>
          <p className='text-[20px] capitalize'>am Gard Alson</p>
          <p className="text-[20px]">Welcome to my Porfolio.  </p>
          <p className='text-[20px]'>I'm a Full Stack Developer, PenTester, Game Developer and Data Analyst </p>

          <h2 className=" text-center text-[20px] mt-[50px] mb-[5px]" >Get in Touch</h2>
          {/* icons */}
          <div className='flex flex-row justify-evenly border-2 mx-auto py-[10px]  w-1/2 border-white     rounded-[50px] '>
            
            <div className='h-[30px] w-[30px]  rounded-[100%] hover:scale-[1.4]  ease-in-out'>
              <a href="http://github.com/alsongard" target="_blank">
                <FaGithub className='h-[100%] w-[100%] rounded-[100%] hover:text-black text-white bg-sky-500'/>
                {/* <FaGithub className='h-[100%] w-[100%] rounded-[100%] hover:bg-black text-blue  bg-slate-400  '/> */}
              </a>
            </div>

            <div className='h-[30px] w-[30px]  rounded-[100%] hover:scale-[1.4] h ease-in-out'>
              <a href="mailto:alsongadizo@gmail.com" target="_blank">
                <BiLogoGmail className='h-[100%] w-[100%] rounded-[100%] hover:text-black text-white bg-sky-500'/>
              </a>
            </div>

            <div className='h-[30px] w-[30px]  rounded-[100%] hover:scale-[1.4] hover:black  ease-in-out'>
              <a href="https://x.com/alsongadizo" target="_blank">
                <FaTwitter className='h-[100%] w-[100%] rounded-[100%] hover:text-black text-white bg-sky-500'/>
              </a>
            </div>

          </div>

        </div>

      </div>

        {/* ABOUT ME */}
      <section className='text-white  my-[50px]'>
        <h1 className='text-center text-[23px] font-bold mt-[50px] mb-[10px]'>About Me</h1>
        <div className="px-[50px] text-center">
          <p className='text-[20px]'>I’m a curious and creative developer who loves building cool stuff with code. From designing sleek front-ends and developing powerful back-ends, to diving into cybersecurity as a pentester, creating games, and even exploring the world of data analysis—I enjoy wearing multiple hats and learning along the way. I'm all about solving problems, experimenting with new tech, and turning ideas into real, working things people can use and enjoy.Let’s build something awesome!</p>
        </div>
        <div className='text-center my-[20px]'>
          <p className='text-[20px]'>To know more About Me click the button below</p>
          <button className='my-[10px] bg-sky-500 py-[3.5px] px-[10px] rounded-md text-[20px] hover:text-black hover:scale-[1.1]'><Link href='/'>About Me</Link></button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="text-white  my-[50px] ">
        {/* <div className=" w-[80%] text-white p-[50px] mx-auto dark:bg-slate-500" > */}
        <h1 className='text-center text-[23px] font-bold mt-[50px] mb-[10px]'>Services</h1>
        <div className=" w-[80%] dark:text-white p-[50px] mx-auto " >
          <h1 className='text-[20px]'>Serivces I Offer</h1>
          <ul className="list-disc text-left pl-[20px]">
            <li className='text-[20px]'>Web Development and design both front-end and back-end</li>
            <li className='text-[20px]'>Data analyst</li>
            <li className='text-[20px]'>Web Scraping</li>
            <li className='text-[20px]'>Software Development using C++ and Python</li>
            <li className='text-[20px]'>Game Development</li>
          </ul>
        </div>
        <div className='text-center my-[20px]'>
          <p className='text-[20px]'>Click below To</p>
          <button className='my-[10px] bg-sky-500 py-[3.5px] px-[10px] rounded-md text-[20px] hover:text-black hover:scale-[1.1]'><Link href='/'>Hire Me</Link></button>
        </div>
      </section>





    </main>

    );
}
