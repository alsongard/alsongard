import { Link } from 'lucide-react';
import Image from "next/image";
import type { DBProjectData } from '@/type';

interface PropTypes {
    item: DBProjectData
}

/*
 id: 1,
      projectname: 'Mindbrige Mental Health Platform',
      projectdescription: 'A full-stack web application designed to bridge the gap between university students and mental health counseling services. The platform facilitates secure booking, chat communication, and support within an educational environment',
      techstack: [Array],
      projecturl: 'https://universitystudentmentalhealth.vercel.app/',
      githuburl: 'https://github.com/alsongard/University_Student_Mental_Health_WebApp_Platform',
      projecttype: 'web development projects',
      projectimage: 
      */

function ProjectComponentView(prop:PropTypes)
{
    console.log(`this is prop`);
    console.log(prop.item.projectimage);
    return (
        <div className=" py-[10px] flex flex-row max-slg:flex-col max-slg:h-auto  max-slg:gap-y-[20px]  space-x-[30px] border-white relative h-[300px] shadow-[0px_0px_10px_black] px-[20px]  rounded-md ">
            <a className="cursor-pointer" target="_blank" href={prop.item.githuburl}>
                <div className='relative'> 
                    <div className="relative h-[270px] w-[350px] max-sm:h-[200px] max-sm:w-full rounded-md ">
                        <Image fill={true} className="rounded-md" src={prop.item.projectimage}unoptimized={true} alt="project-image"/> 
                    </div>
                </div>
            </a>
            <div>
                <h2 className='font-bold pb-[10px]'>{prop.item.projectname}</h2>
                <p>{prop.item.projectdescription}</p>
                <div className='flex flex-row flex-wrap gap-y-2.5 space-x-[10px] py-[10px] '>
                    {
                        prop.item.techstack.map((item, index:number)=>
                            <p key={index} className="py-[5px] px-[10px] bg-[#291263] rounded-md">{item}</p>
                        )
                    }
                </div>
                <div className='flex flex-row gap-x-[5px] items-center'>
                    <Link color="rgb(56,189,248)" size={17}/> 
                    <p className='text-sky-400'>{prop.item.projecturl}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponentView;