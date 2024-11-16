import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";


export async function GET(req){
    try{
        const db = await createConnection();
        const [rows] = await db.execute("SELECT * FROM user_acc ");

        if (rows.length === 0){
            return NextResponse.json({error:"No User Found"},{status:404});
        }

        return NextResponse.json(
            {user:rows , message:"Get User success"})
    }catch(error){
        console.log(error);
    }
}


export async function DELETE(req){
    const {id} = await req.json();
    try{
        const db = await createConnection();
        const [rows] = await db.execute("DELETE FROM user_acc WHERE User_ID = ?;",[id]);
        if (rows.length === 0){
            return NextResponse.json({error:"User not exist "},{status:404});
        }
        return NextResponse.json({message:"Delete Product success"})
    }
    catch(error){
        console.log(error);
        
    }
}