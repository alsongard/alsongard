import { pool } from '@/lib/db';
import { group, log } from 'node:console';
// using server components

import type { DBProjectData, GroupedData } from '@/type';

async function getProjects()
{
    try {
        const data = await pool.query("SELECT * FROM project;");
        // console.log('data.rows');
        // console.log(data.rows);
        // get projectType
        const groupedProjectData: GroupedData = {};
        data.rows.forEach((project)=>{
            if (!groupedProjectData[project.projecttype]) // if key does not exist continue on block
            {
                console.log(`added projecttype : ${project.projecttype}`);
                groupedProjectData[project.projecttype] = [];
            }
            groupedProjectData[project.projecttype].push(project);

        })
        console.log("groupedProjectData:");
        console.log(groupedProjectData);
        return groupedProjectData;
    }
    catch(err)
    {
        console.error(`Database Error: `, err);
        throw new Error("Failed to fetch revenue data.");
    }   
}


export {getProjects};