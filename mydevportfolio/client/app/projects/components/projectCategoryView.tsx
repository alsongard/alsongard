import ProjectComponentView from "./projectComponentView";

type projectData =  {
    id: number,
    name: string,
    short_description: string,
    description: string,
    img: string,
    url: string,
    techStack: Array<String>
}

type CategoryProps = {
    projectCategoryName: string,
    projects : projectData[]
}
function ProjectCategoryView(props: CategoryProps)
{
    const {projectCategoryName, projects} = props;

    return (
        <div className="mb-[50px]  mx-auto  rounded-md p-[10px]">
            <h1 className="font-semibold">{projectCategoryName.toUpperCase()}</h1>
            <div className="grid grid-cols-1 max-[936px]:grid-cols-2  max-[732px]:grid-cols-1 gap-x-[30px] gap-y-[50px] shadow-[0px_0px_5px_#2e4053] rounded-md p-[30px] "> {/**dark:border-black  justify-items-stretch gap-x-[30px] border-[1px] border-black  items-center gap-y-[20px] flex-wrap px-[10px]*/}
                {projects.map(project => (
                        <ProjectComponentView key={project.id} item={project}/>
                    ))}
            </div>
        </div>
    )
}

export default ProjectCategoryView;
//justify-between flex-wrap gap-y-[30px]