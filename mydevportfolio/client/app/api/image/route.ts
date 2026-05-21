import cloudinary from "cloudinary";
const cloudv2 = cloudinary.v2;
import { auth } from "@/auth";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { NextRequest, NextResponse } from "next/server";
import { pool } from '@/lib/db';
import { log } from "console";



cloudv2.config({
    secure:true,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME
})

// console.log(`this is cloudinary config`);
// console.log(cloudv2.config());

/*
this is cloudinary config
{
  secure: true,
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
  cloud_name: 'your_cloud_name'
}
*/

// add data to database


async function GET()
{
    const data:any = await pool.query(`SELECT * FROM images;`);
    if (data.rowCount > 0) 
    {
        return NextResponse.json({success:true, msg:"Updated success!", data: data.rows}, {status:200})
    }
    // below runs if not succes
    // console.log('data');
    // console.log(data);
    return NextResponse.json({success:false, msg:"Unable to fetch Data!"}, {status:500});
}

async function POST(request:NextRequest)
{
    const session:any = await auth();
    if (!session.auth)
    {
        return NextResponse.json({success:false, msg:"User not authenticated!"})
    }
    const formData = await request.formData();
    // console.log(`this is formData`)
    // console.log(formData);
    const imageName =  formData.get("name");
    const tagName = formData.get('tag');

    const file = formData.get('theFile') as File; 
    if (!file || !tagName) return NextResponse.json({success: false, msg:"Invalid input"}, {status:400});
    const byteArrayBuffer = Buffer.from(await file.arrayBuffer());
    // let uploadedResult:any; 
    try
    {
        const uploadResult:any = await new Promise((resolve, reject) => {
            cloudv2.uploader.upload_stream({folder: "Portfolio"}, (error, uploadResult) => {
                if (error) {
                    return reject(error);
                }
                return resolve(uploadResult);
            }).end(byteArrayBuffer);
        })
        if (uploadResult)
        {
            console.log(`Buffer upload_stream wth promise success - ${uploadResult.public_id}`);
            // console.log('uploadResult');
            // console.log(uploadResult);
        }
        // console.log(`this is data before loading to PostgresdB`);
        // console.log(`imageName: ${imageName}\ntagName: ${tagName}\nimageUrl:${uploadedResult.secure_url}\nBytes:${uploadedResult.bytes + "Bytes"}`)
        
       
        const data = await pool.query(`INSERT INTO images (imagename, imageurl, tag, imgSize) VALUES($1, $2, $3, $4);`, 
            [
                imageName,
                uploadResult.secure_url,
                tagName,
                uploadResult.bytes + " Bytes",
            ]
        )
       
       
        // console.log('returned result for PostgresDB');
        // console.log(data);

        if (data.rowCount != 1)
        {
            return NextResponse.json({success:false, msg:"Image not  uploaded to DB!!"});
        }
        return NextResponse.json({success:true, msg:"Image successfully uploaded to DB"}); 

    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return NextResponse.json({success:false, Error: err}, {status:500})
    }
}
export  {GET, POST};

