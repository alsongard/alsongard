
import { NextResponse, type NextRequest } from "next/server";
import { pool } from '@/lib/db';

export async function PUT(request:NextRequest, {params}: {params: Promise<{id: string}>})
{
    const {id} = await params;
    const body  = await request.json(); // this has access to the body
    // const myparams = await params;
    // console.log(`this is myparams`);  { id: '1' }
    // console.log(myparams); 
    // console.log(`this is id: ${id}`); //this is id: 1

    const fieldmap: Record<string, string> = {
        projectname: "projectname", 
        projectdescription: "projectdescription",
        techstack: "techstack",
        projecturl: "projecturl",
        githuburl: "githuburl",
        projecttype: "projecttype",
        projectimage: "projectimage",
        shortdescription: "shortdescription",
        startdate: "startdate",
        enddate: "enddate"
    }

    let updates: string[] = [];
    let values: any[] = [];
    let idx = 1;
    for (const [key, column] of Object.entries(fieldmap))  // Object.entries returns = [ [key1, value1], [key2, value2], ....]
    {
        // check if body has propertyName: key
        if (body.hasOwnProperty(key)) //hasOwnProperty checks if the given argument is a key for the object
        {
            updates.push(`${column} = $${idx}`);
            values.push(body[key]);
            idx++;
        }
    }

    // console.log(`this is updates`);
    // console.log(updates);

    // this is updates [ 'projectdescription = $1' ]
    // console.log(`this is values`);
    // console.log(values);
    // this is values
    // [
    //   'A full-stack airport booking platform where users can search, compare, and book flights with a modern interface and secure authentication system.'
    // ]


    if (updates.length == 0)
    {
        return Response.json({"message": "no data has been given"}, {status: 400});
    }

    values.push(id);
    const query = `UPDATE project SET ${updates.join(", ")} WHERE id = $${idx} RETURNING * `;

    try
    {

        const result = await pool.query(query, values);   
        // remember after performing operation you will have: operation: (name of the operation) and rowCount: if 1 success operation
        if (result.rowCount == 0)
        {
            return NextResponse.json({error: 'Project not found!'}, {status:400});
        }
        return NextResponse.json({success: true, message:"success on updating project"}, {status: 200});
        // return Response.json({"message": "success updating project data"}, {status: 200})
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return Response.json({err}, {status: 500});
    }
}
