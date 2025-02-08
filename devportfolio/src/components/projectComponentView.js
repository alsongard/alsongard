function ProjectComponentView(prop)
{
    return (
        <div className="w-[33%]   px-[20px] rounded-md ">
            <a className="cursor-pointer " target="_blank" href={prop.item.url}>
                <div>
                    <h2>{prop.item.name}</h2>
                    <p>{prop.item.short_description}</p>
                    <img src="" alt="project-image"/>
                    <p>{}</p>
                </div>
            </a>
        </div>
    )
}

export default ProjectComponentView;