import ProjectComponentView from "./projectComponentView";
function ProjectCategoryView(props)
{
    const {projectCategoryName, projects} = props;

    return (
        <div className="">
            <h1 className="font-semibold">{projectCategoryName}</h1>
            <div className="border-2 border-[rgba(105,47,47,0.3)] dark:border-black  rounded-md py-3 flex flex-row justify-between  items-center gap-y-[20px] flex-wrap px-[10px]">
                {projects.map(project => (
                        <ProjectComponentView key={project.id} item={project}/>
                    ))}
            </div>
        </div>
    )
}

export default ProjectCategoryView;