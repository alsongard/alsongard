import ProjectComponentView from "./projectComponentView";
import data from "./projectData";
function ProjectCategoryView(props)
{
    const {projectCategoryName, projects} = props;

    return (
        <div className="">
            <h1 className="font-semibold">{projectCategoryName}</h1>
            <div className="border-2 border-sky-400 flex flex-row justify-start gap-x-[100px] flex-wrap px-[20px]">
                {projects.map(project => (
                        <ProjectComponentView key={project.id} item={project}/>
                    ))}

            </div>
        </div>
    )
}

export default ProjectCategoryView;