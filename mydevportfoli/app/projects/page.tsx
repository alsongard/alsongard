import ProjectCategoryView from "./components/projectCategoryView";
import data from "./components/projectData";


function ProjectPage()
{

  // type projectType = string;
  const projectTypes = Object.keys(data);
  console.log(projectTypes)
  return (
    <section className="pt-[20px] dark:bg-slate-500 pb-[50px]">
      <h1 className="text-center text-[23px]">Project Page</h1>
      <h2 className="text-center">Where will and intelligence is crafted beyond.</h2>
      <div className="w-[90%] mt-[30px]  mx-auto">
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