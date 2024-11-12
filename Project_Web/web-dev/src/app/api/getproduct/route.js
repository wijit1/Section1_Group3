import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";
import { products } from "../../../../assets/assets";

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
        console.log(error);
    }
}