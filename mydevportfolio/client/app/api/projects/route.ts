// this file will be used for querying the database
import { pool } from '@/lib/db';

async function getProjects() {
    const data = await pool.query(`SELECT * FROM project;`)
    console.log(`this is data`);
    console.log(data);
    return data.rows;
}
// route handler 

export async function GET()
{
    try {
        return Response.json(await getProjects());
    }
    catch(err)
    {
        console.log(err);
        return Response.json({err}, {status:500})
    }
} 