function ProjectComponentView(prop)
{
    return (
        <div>
            <div>
                <h2>{prop.item.name}</h2>
                <p>{prop.item.short_description}</p>
                <img src="" alt="project-image"/>
            </div>
        </div>
    )
}

export default ProjectComponentView;