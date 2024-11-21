import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";

export async function GET(req,{params}){
    
    const {id}= params;

    try{
        const db = await createConnection();
        const [rows] = await db.query("SELECT * FROM user_acc WHERE User_ID = ?",[id]);
        if (rows.length === 0){
            return NextResponse.json({error:"User not exist "},{status:404});
        }

        return NextResponse.json(
            {user:rows , message:"Get Product success"})
    }catch(error){
        console.log(error);
    }
}