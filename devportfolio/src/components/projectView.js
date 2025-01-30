function ProjectComponentView(prop)
{
    return (
        <div>
            <h1>{prop.item.projectCategory}</h1>
            <div>
                <div>
                    <h2>{prop.item.name}</h2>
                    <p>{prop.item.short_description}</p>
                </div>

            </div>
        </div>
    )
}

export default ProjectComponentView;