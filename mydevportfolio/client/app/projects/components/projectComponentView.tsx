import { Link } from 'lucide-react';
import Image from "next/image";

type ProjectData =  {
    id: number,
    name: string,
    short_description: string,
    description: string,
    img: string,
    url: string,
    techStack: Array<String>
}
interface PropTypes {
    item: ProjectData
}

function ProjectComponentView(prop:PropTypes)
{
    return (
        <div className=" py-[10px] flex flex-row max-slg:flex-col max-slg:h-auto  max-slg:gap-y-[20px]  space-x-[30px] border-white relative h-[300px] shadow-[0px_0px_10px_black] px-[20px]  rounded-md ">
            <a className="cursor-pointer" target="_blank" href={prop.item.url}>
                <div className='relative'> 
                    <div className="relative h-[270px] w-[350px] max-sm:h-[200px] max-sm:w-full rounded-md ">
                        <Image fill={true} className="rounded-md" src={prop.item.img} alt="project-image"/> 
                    </div>
                </div>
            </a>
            <div>
                <h2 className='font-bold pb-[10px]'>{prop.item.name}</h2>
                <p>{prop.item.description}</p>
                <div className='flex flex-row flex-wrap gap-y-2.5 space-x-[10px] py-[10px] '>
                    {
                        prop.item.techStack.map((item, index:number)=>
                            <p key={index} className="py-[5px] px-[10px] bg-[#291263] rounded-md">{item}</p>
                        )
                    }
                </div>
                <div className='flex flex-row gap-x-[5px] items-center'>
                    <Link color="rgb(56,189,248)" size={17}/> 
                    <p className='text-sky-400'>{prop.item.url}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponentView;