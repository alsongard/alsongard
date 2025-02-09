function ProjectComponentView(prop)
{
    return (
        <div className="w-[32%] h-[400px] shadow-[0px_0px_10px_lightblue] px-[20px] rounded-md ">
            <a className="cursor-pointer " target="_blank" href={prop.item.url}>
                <div>
                    <h2>{prop.item.name}</h2>
                    <p>{prop.item.short_description}</p>
                    <img className="w-[100%] rounded-md h-[300px] border-2 border-black " src={prop.item.img} alt="project-image"/>
                    <p>{}</p>
                </div>
            </a>
        </div>
    )
}

export default ProjectComponentView;