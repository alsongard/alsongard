// this file will be used for querying the database
import { pool } from '@/lib/db';
import { log } from 'console';
import { NextResponse, type NextRequest } from 'next/server';
import {auth}  from '@/auth';





async function getProjects() {
    const data = await pool.query(`SELECT * FROM project;`)
    // console.log(`this is data`);
    // console.log(data);
    return data.rows;
}


// route handler 
export async function GET(request: NextRequest)
{

    console.log('this is request:');
    console.log(request)
    try {
        return Response.json(await getProjects());
    }
    catch(err)
    {
        console.log(err);
        return Response.json({err}, {status:500})
    }
} 

export async function POST(request: NextRequest)
{
    const session:any = await auth();
    // console.log(`this is session:`);
    // console.log(session);
    /*
    this is session:
        {
        user: { email: 'your_email@gmail.com' },
        expires: '2026-06-20T04:39:19.449Z'
        }
  */
    if (!session.user)
    {
        return NextResponse.json({success:false, msg:"User Not authenticated"})
    }
    const body = await request.json();
    console.log("this is body");
    console.log(body); // { name: 'somethingrandom' }
    const {projectname, projectdescription, techstack, projecturl, githuburl, projecttype, projectimage, shortdescription, startdate, enddate} =  body;
    // console.log(`projectname:${projectname}\nprojectdescription:${projectdescription}\ntechstack:${techstack}\nprojecturl:${projecturl}\ngithuburl:${githuburl}\nprojecttype:${projecttype}\nprojectimage:${projectimage}\nshortdescription:${shortdescription}\nstartdate:${startdate}\nenddate:${enddate}`);
    
    // console.log('techstack');
    // console.log(techstack);
    // console.log(`typeof(techstack) : ${typeof(techstack)}`); // an array is special type of an object and not all array methods can be applied to a regular object
    // console.log(`Checking if Array: ${Array.isArray(techstack)}`); 
    techstack.map((item:any)=>{log(`item: ${item}`)})
    /*
    techstack
        [ 'React', 'NodeJS', 'ExpressJS', 'MongoDB' ]
    typeof(techstack) : object
    Checking if Array: true
    item: React
    item: NodeJS
    item: ExpressJS
    item: MongoDB
  
    */
    // console.log(techstack.split(" "));
    // let mytechstack = JSON.parse(techstack.replace(/'/g, '"'));
    // console.log('mytechstack');
    // console.log(mytechstack);
    // techstack.map((item:string)=>{console.log(`this is item: ${item}`)});
    const pgArray = `{${techstack.map((item:string) => `"${item}"`).join(',')}}`;
    // console.log('this is pgArray');
    // console.log(pgArray);
    /*
      this is pgArray
    {"React","NodeJS","ExpressJS","MongoDB"}
    */
    try
    {
        const data = await pool.query(`INSERT INTO project (projectname, projectdescription, techstack, projecturl, githuburl, projecttype, projectimage, shortdescription, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, 
            [
                projectname,
                projectdescription,
                pgArray,
                projecturl,
                githuburl,
                projecttype,
                projectimage,
                shortdescription,
                startdate,
                enddate
            ]
        );
        
        console.log(`this is data`);
        console.log(data);
        if (data.rowCount == 1)
        {
            return Response.json({"success": true, "message": "success uploading data"}, {status: 201})
        }
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return Response.json({err}, {status: 500});
    }
}
