import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";

export async function GET(req){
    try{
        const db = await createConnection();
        const [rows] = await db.execute("SELECT * FROM itemproduct ");

        if (rows.length === 0){
            return NextResponse.json({error:"Product not exist "},{status:404});
        }

        return NextResponse.json(
            {products:rows , message:"Get Product success"})
    }catch(error){
        return NextResponse.json({message:"No Product "})
    }
}


export async function DELETE(req){
    const {id} = await req.json();
    try{
        const db = await createConnection();
        const [rows] = await db.execute("DELETE FROM itemproduct WHERE P_ID = ?;",[id]);
        if (rows.length === 0){
            return NextResponse.json({error:"Product not exist "},{status:404});
        }
        return NextResponse.json({message:"Delete Product success"})
    }
    catch(error){
        console.log(error);
        
    }
}

