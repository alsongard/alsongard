'use client';

import { FaGithub} from "react-icons/fa";
import {CiGlobe } from 'react-icons/ci'
import Image from "next/image";
import type { DBProjectData } from '@/type';
import { CustomIcon } from '@/app/components/customIcon';
import { sendGAEvent } from "@next/third-parties/google";


interface PropTypes {
    item: DBProjectData
}



function ProjectComponentView(prop:PropTypes)
{
    // console.log(`this is prop`);
    // console.log(prop.item.projectimage);
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
                <div className='flex flex-row gap-x-[5px] items-center'
                    onClick={()=>{
                            sendGAEvent('event', 'viewed_project', {value: prop.item.projectname})
                    }}
                >
                    <a 
                        className="flex items-center gap-x-[5px] bg-[#0d1117] border border-cyan-500/30 shadow-[0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_16px_rgba(34,211,238,0.45)] hover:border-cyan-400/60 hover:bg-[#11161d] rounded-md py-[5px] px-[10px] transition-all duration-300"
                        // box-shadow horizontalOffset(negative:left, positive:right)_verticalOffset(negative:up,positive:bottom)_blur_spread-color  
                        title='Website Link' 
                        target="_blank"
                        
                        href={prop.item.projecturl}
                    > 
                        <p className="text-sm text-cyan-300">Link</p>
                        <CustomIcon 
                            icon={CiGlobe}
                            className="text-cyan-300 text-[14px]"
                        />
                    </a>

                    <a 
                        className="flex items-center gap-x-[5px] bg-[#0d1117] border border-white/15 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] hover:border-white/30 hover:bg-[#11161d] rounded-md py-[5px] px-[10px] transition-all duration-300" 
                        title="Github Link" 
                        href={prop.item.githuburl}
                    >
                        <p className="text-sm text-white/70">Github</p>
                        <CustomIcon
                            icon={FaGithub}
                            className="text-white/70 text-[14px]"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponentView;