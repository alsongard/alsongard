import Image from "next/image";
/*type projectData =  {
    id: number,
    name: string,
    short_description: string,
    description: string,
    img: string,
    url: string
}*/

function ProjectComponentView(prop)
{
    return (
        <div className="projectComponent relative h-[400px] shadow-[0px_0px_10px_black] px-[20px]  rounded-md ">
            <a className="cursor-pointer  " target="_blank" href={prop.item.url}>
                <div> 
                    <h2>{prop.item.name}</h2>
                    <div className="relative h-[350px] rounded-md w-[100%]">
                        <Image fill={true} className="rounded-md " src={prop.item.img} alt="project-image"/> 
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectComponentView;