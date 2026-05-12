import ProjectCategoryView from "./components/projectCategoryView";
import data from "./components/projectData";

import { getProjects } from "../../lib/data";

export const metadata = {
  title: "Project",
  description: "Project page"
}

async function ProjectPage()
{
	// type projectType = string;
	const dbProjectData = await getProjects();
	console.log('dbProjectData');
	console.log(dbProjectData); 
	// const projectArray = [data.map((item)=> {return item})];
	// console.log(`this is projectArray:`)
	// console.log(projectArray);
	// const projectTypes = Object.keys(data); // returns an array of the keys
	// console.log("projectTypes");
	// console.log(projectTypes);
	return (
		<section className="pt-[20px] text-black bg-white dark:bg-black dark:text-white pb-[50px]"> {/**dark:bg-slate-500 */}
			<h1 className="text-center text-[23px]">Project Page</h1>
			<h2 className="text-center">Where will and intelligence is crafted beyond.</h2>
			<div className="w-[90%] mt-[30px] mx-auto">
				{
					Object.keys(dbProjectData).map((projectType)=>(
						<ProjectCategoryView key={projectType} projectCategoryName={projectType} projects={dbProjectData[projectType]}/>
					))
				}
			</div>
		</section>
	)
}
export default ProjectPage; 