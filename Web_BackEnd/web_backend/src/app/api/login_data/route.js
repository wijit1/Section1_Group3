import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req){
    try{
        const body = await req.json();
        const { id, name,formattedDate } = body;
        const db = await createConnection();

        const [result] =  await db.query('INSERT INTO Login_Data (User_ID,User_Name,Date_Time)  VALUES (?,?,?)',[id,name,formattedDate])
        return NextResponse.json({result,message:"Add Login Time success"})
    }
    catch(error){
        return NextResponse.json({error:error.message,message:'Something went wrong '},{status:404})
    }
}