import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import SkillsSection from "@/app/components/skillSelection";

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
				<p className='max-md:text-[17px] text-[20px]'>👋Hey, I’m Gard Alson — a developer with a passion for building, breaking, and understanding how things work behind the screen.
					My journey into tech didn’t start with a textbook or a tutorial — it started with curiosity.
					I’ve always loved tinkering, whether it’s figuring out how to design a beautiful front-end, optimizing a back-end system, or diving into networks and systems as a pentester just to see what’s possible (and what shouldn't be 👀).
					I build projects that excite me, challenge me, and push me to grow. Some days I’m deep into writing clean UI components, other days I’m solving logic-heavy backend tasks or cracking open cybersecurity challenges.
					When inspiration hits, I even dip into game development, experimenting with Unity, blending creativity with code. And when I feel like thinking in numbers, I switch gears to explore data analysis, finding patterns that tell interesting stories.
					I don’t claim to know everything — but I’m constantly learning, building, and improving. This site is a reflection of that journey.
				</p>
			</div>
			<div className="w-full my-12.5">
				<SkillsSection/>

			</div>



		</section>
	)
}
