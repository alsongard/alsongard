import ProjectCategoryView from "./projectCategoryView";
import data from "./projectData";
function ProjectPage()
{
    const projectTypes = Object.keys(data);
    console.log(projectTypes)
    return (
        <section className="mt-[20px]">
            <h1 className="text-center text-[23px]">Project Page</h1>
            <h2 className="text-center">Where will and intelligence is crafted beyond.</h2>
            <div className="w-[80%] mt-[30px] bg-red-300 mx-auto">
                {
                    Object.keys(data).map((projectType)=>(
                        <ProjectCategoryView key={projectType} projectCategoryName={projectType} projects={data[projectType]}/>
                    ))
                }
            </div>
        </section>
    )
}
export default ProjectPage;