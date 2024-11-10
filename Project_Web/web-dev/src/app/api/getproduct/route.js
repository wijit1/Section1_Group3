import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";

export async function GET(req){
    try{
        const db = await createConnection();
        const [rows] = await db.execute("SELECT * FROM itemproduct ");

        if (rows.length === 0){
            return NextResponse.json({error:"Product not exist "},{status:404});
        }
        const base64Image = Buffer.from(rows[0].Picture).toString('base64');
        const imageType = 'image/jpeg';


        return NextResponse.json(
            {image:`data:${imageType};base64,${base64Image}`},
            { headers: { 'Content-Type': 'application/json' } }
        )
    }catch(error){
        console.log(error);
    }
}