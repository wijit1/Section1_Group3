import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";

export async function GET(req,{params}){
    
    const {id}= params;

    try{
        const db = await createConnection();
        const [rows] = await db.query("SELECT * FROM itemproduct WHERE P_ID = ?",[id]);
        if (rows.length === 0){
            return NextResponse.json({error:"Product not exist "},{status:404});
        }

        return NextResponse.json(
            {product:rows , message:"Get Product success"})
    }catch(error){
        console.log(error);
    }
}