function ProjectComponentView(prop)
{
    return (
        <div className="projectComponent h-[400px] shadow-[0px_0px_10px_black] px-[20px] rounded-md ">
            <a className="cursor-pointer " target="_blank" href={prop.item.url}>
                <div>
                    <h2>{prop.item.name}</h2>
                    <img className="w-[100%] rounded-md h-[300px]  " src={prop.item.img} alt="project-image"/> {/**border-2 border-black */}
                    {/* <p>{}</p> */}
                </div>
            </a>
        </div>
    )
}

export default ProjectComponentView;