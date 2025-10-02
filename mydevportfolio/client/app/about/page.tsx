import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const metadata = {
  title:'About',
  description:'About Page'
}
export default function About() {
  return (
    <section className="bg-white text-black dark:text-white dark:bg-black w-[100vw]">
      <h1 className="text-center text-[40px] font-bold pt-[30px]">About Me</h1>
      {/* home section */}
      <div className='w-[80%] mx-auto  my-[10px]'>
        <p className='max-md:text-[17px] text-[20px]'>👋 About Me Hey, I’m Gard Alson — a developer with a passion for building, breaking, and understanding how things work behind the screen.
          My journey into tech didn’t start with a textbook or a tutorial — it started with curiosity.
          I’ve always loved tinkering, whether it’s figuring out how to design a beautiful front-end, optimizing a back-end system, or diving into networks and systems as a pentester just to see what’s possible (and what shouldn't be 👀).
          I build projects that excite me, challenge me, and push me to grow. Some days I’m deep into writing clean UI components, other days I’m solving logic-heavy backend tasks or cracking open cybersecurity challenges.
          When inspiration hits, I even dip into game development, experimenting with Unity, blending creativity with code. And when I feel like thinking in numbers, I switch gears to explore data analysis, finding patterns that tell interesting stories.
          I don’t claim to know everything — but I’m constantly learning, building, and improving. This site is a reflection of that journey.
        </p>
      </div>
      <div className="w-[100%] my-[100px]">
        <h1 className='text-[30px] text-center font-semibold py-[10px]'>Skills</h1>
        <div className='flex flex-col space-y-[80px] h-[400px] py-[20px] overflow-y-auto items-center  text-white w-[80%] mx-auto  border-2 dark:border-white border-black rounded-md'>
          <section className='flex flex-row max-sm:flex-col max-sm:gap-y-[10px] max-sm:items-center  items-start w-[80%] justify-between mt-[20px]'>
            <div className='intro w-[200px] flex-wrap sticky top-0'>
              <h1 className='text-[22px] bg-slate-800 py-[10px] px-[5px] rounded-md'>Front-end Development</h1>
            </div>
            <div className='shadow-[0px_0px_5px_black]  w-[50%]  bg-slate-800 p-[20px] rounded-md '>
              {/* <ul className='grid grid-cols-2 justify-items-center  gap-y-[50px]' > */}
              <ul className='flex flex-row gap-x-[30px] items-center justify-start max-[908px]:justify-center pl-[17px] flex-wrap w-[100%]  gap-y-[50px]' >
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" /></li>
              </ul>
            </div>
          </section>

          <section className='flex flex-row max-sm:flex-col max-sm:gap-y-[10px] max-sm:items-center  items-start w-[80%] justify-between mt-[20px]'>
            <div className='intro w-[200px] flex-wrap sticky top-0'>
              <h1 className='text-[22px] bg-slate-800 py-[10px] px-[5px] rounded-md'>Back-End Development</h1>
            </div>
            <div className='shadow-[0px_0px_5px_black]  w-[50%]  bg-slate-800 p-[20px] rounded-md '>
              <ul className='flex flex-row gap-x-[30px] items-center justify-start max-[908px]:justify-center pl-[17px] flex-wrap w-[100%]  gap-y-[50px]'>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" /></li>
              </ul>
            </div>
          </section>

          <section className='flex flex-row max-sm:flex-col max-sm:gap-y-[10px] max-sm:items-center  items-start w-[80%] justify-between mt-[20px]'>
            <div className='intro w-[200px] flex-wrap sticky top-0'>
              <h1 className='text-[22px] bg-slate-800 py-[10px] px-[5px] rounded-md'>Penetration Testing</h1>
            </div>
            <div className='shadow-[0px_0px_5px_black]  w-[50%]  bg-slate-800 p-[20px] rounded-md '>
              <ul className='flex flex-row gap-x-[30px] items-center justify-start max-[908px]:justify-center pl-[17px] flex-wrap w-[100%]  gap-y-[50px]'>
                <img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
              </ul>
            </div>
          </section>

          <section className='flex flex-row max-sm:flex-col max-sm:gap-y-[10px] max-sm:items-center  items-start w-[80%] justify-between mt-[20px]'>            
            <div className='intro w-[200px] flex-wrap sticky top-0'>
              <h1 className='text-[22px] bg-slate-800 py-[10px] px-[5px] rounded-md'>Game Development</h1>
            </div>
            <div className='shadow-[0px_0px_5px_black]  w-[50%]  bg-slate-800 p-[20px] rounded-md'>
              <ul className='flex flex-row gap-x-[30px] items-center justify-start max-[908px]:justify-center pl-[17px] flex-wrap w-[100%]  gap-y-[50px]'>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain-wordmark.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]'src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" /></li>
              </ul>
            </div>
          </section>

          <section className='flex flex-row max-sm:flex-col max-sm:gap-y-[10px] max-sm:items-center  items-start w-[80%] justify-between mt-[20px]'>
            <div className='intro w-[200px] flex-wrap sticky top-0'>
              <h1 className='text-[22px] bg-slate-800 py-[10px] px-[5px] rounded-md'>Data Analysis </h1>
            </div>
            <div className='shadow-[0px_0px_5px_black]  w-[50%]  bg-slate-800 p-[20px] rounded-md'>
              <ul className='flex flex-row gap-x-[30px] items-center justify-start max-[908px]:justify-center pl-[17px] flex-wrap w-[100%]  gap-y-[50px]'>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" /></li>
                <li><img className='w-[100px] h-[100px] rounded-md border-2 border-white tech-icon p-[10px] hover:scale-[1.1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg" /></li>
              </ul>
            </div>
          </section>

        </div>

    </div>



    </section>
  )
}
