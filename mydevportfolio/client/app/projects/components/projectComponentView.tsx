import { Link } from 'lucide-react';
import Image from "next/image";
/*type projectData =  {
    id: number,
    name: string,
    short_description: string,
    description: string,
    img: string,
    url: string
}*/

function ProjectComponentView(prop:any)
{
    return (
        <div className=" py-[10px] flex flex-row  space-x-[30px] border-white relative h-[300px] shadow-[0px_0px_10px_black] px-[20px]  rounded-md ">
            <a className="cursor-pointer" target="_blank" href={prop.item.url}>
                <div className=''> 
                    <div className="relative h-[270px] w-[350px] rounded-md ">
                        <Image fill={true} className="rounded-md " src={prop.item.img} alt="project-image"/> 
                    </div>
                </div>
            </a>
            <div>
                <h2 className='font-bold pb-[10px]'>{prop.item.name}</h2>
                <p>{prop.item.description}</p>
                <div className='flex flex-row space-x-[10px] py-[10px] '>
                    {
                        prop.item.techStack.map((item:string, index:number)=>
                        
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