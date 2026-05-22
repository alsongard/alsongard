import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";


async function DELETE(request:NextRequest, {params}: {params: Promise<{id: string}>})
{
    const {id} = await params;
    const session:any = await auth();
    if (!session.user)
    {
        return NextResponse.json({success:false, msg:"User not authenticated!"})
    }
    try
    {
        NextResponse.json({success: true , msg:"Image has been deleted!"});
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return NextResponse.json({success:false, Error: err}, {status:500})
    }
}
