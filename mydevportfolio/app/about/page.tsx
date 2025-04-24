import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function About() {
  return (
    <section className="text-white bg-black">
      <h1 className="text-center text-[35px] font-bold pt-[30px]">About Me</h1>
      {/* home section */}

      

      <div className="flex flex-row  items-start justify-evenly gap-x-[30px] my-[50px] w-[90%] mx-auto  py-[70px]  ">

        <div className="">
          <Image className="rounded-[100%]" width={450}  height={550} src="/images/anime_2.jpg" alt=""/>
        </div>

        <div className='pt-[50px] pl-[5px] '>
          <p className='text-[20px]  '><span className='text-[60px] pr-0'>H</span>i there <div className="dot"></div> <div className="dot"></div> <div className="dot"></div> </p>
          <p className='text-[20px] capitalize'>am Gard Alson</p>
          <p className="text-[20px]">Welcome to my Porfolio.  </p>
          <p className='text-[20px]'>I love coding that is programming, pentesting, webdev and gamedev</p>

          <h2 className=" text-center text-[20px] mt-[50px] mb-[5px]" >Get in Touch</h2>
          {/* icons */}
          <div className='flex flex-row justify-evenly border-2 mx-auto py-[10px]  w-1/2 border-white    bg-[#5d6d7e] rounded-[50px] '>
            <div className='h-[30px] w-[30px]  rounded-[100%] hover:scale-[1.4] hover:black ease-in-out'>
            <a href="http://github.com/alsongard" target="_blank">
              <FaGithub className='h-[100%] w-[100%] rounded-[100%] hover:bg-black  bg-slate-400  '/>
            </a>
            </div>

            <div className='h-[30px] w-[30px]  rounded-[100%] hover:scale-[1.4] hover:black ease-in-out'>
              <a href="mailto:alsongadizo@gmail.com" target="_blank">
                <BiLogoGmail className='h-[100%] w-[100%] rounded-[100%] hover:bg-black  bg-slate-400  '/>
              </a>
            </div>

            <div className='h-[30px] w-[30px]  rounded-[100%] hover:scale-[1.4] hover:black  ease-in-out'>
              <a href="https://x.com/alsongadizo" target="_blank">
                <FaTwitter className='h-[100%] w-[100%] rounded-[100%] hover:bg-black  bg-slate-400   '/>
              </a>
            </div>

          </div>

        </div>

      </div>

      <div>
        <div className="techskills">
          <h2>Skills</h2>
        </div>
      </div>

    </section>
  )
}
