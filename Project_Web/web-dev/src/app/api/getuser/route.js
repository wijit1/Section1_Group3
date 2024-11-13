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