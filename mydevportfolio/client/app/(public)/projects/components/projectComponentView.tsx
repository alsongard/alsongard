import { FaGithub} from "react-icons/fa";
import {CiGlobe } from 'react-icons/ci'
import Image from "next/image";
import type { DBProjectData } from '@/type';
import { CustomIcon } from '@/app/components/customIcon';

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
                <div className='flex flex-row gap-x-[5px] items-center'>
                    <a title='Website Link' href={prop.item.projecturl}> 
                        <CustomIcon 
                            icon={CiGlobe}
                            className="text-blue-300 text-[14px]"
                        />
                    </a>

                    <a title="Github Link" href={prop.item.githuburl}>
                        <CustomIcon
                            icon={FaGithub}
                            className="text-blue-300 text-[14px]"
                        />
                    </a>
                    {/* <p className='text-sky-400'>{prop.item.projecturl}</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectComponentView;