import ProjectCategoryView from "./components/projectCategoryView";
import data from "./components/projectData";

type projectData =  {
  id: number,
  name: string,
  short_description: string,
  description: string,
  img: string,
  url: string
}

export const metadata = {
  title: "Project",
  description: "Project page"
}

function ProjectPage()
{
  // type projectType = string;
  const projectTypes = Object.keys(data);
  // console.log(projectTypes)
  return (
    <section className="pt-[20px] text-black bg-white dark:bg-black dark:text-white pb-[50px]"> {/**dark:bg-slate-500 */}
      <h1 className="text-center text-[23px]">Project Page</h1>
      <h2 className="text-center">Where will and intelligence is crafted beyond.</h2>
      <div className="w-[90%] mt-[30px] mx-auto">
        {
          Object.keys(data).map((projectType: string)=>(
              <ProjectCategoryView key={projectType} projectCategoryName={projectType} projects={data[projectType]}/>
          ))
        }
      </div>
    </section>
  )
}
export default ProjectPage; 