
import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";


export async function POST(req){
    const formData = await req.formData(); 
    
    try{
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const tel = formData.get('tel');
        const birth_date = formData.get('birth_date');
        const image = formData.get('imageProfile');
        const user_password = formData.get('user_password');
        
        // Convert file image to buffer data  

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const db = await createConnection();
        const [result] = await db.query(
            'INSERT INTO user_acc (User_Name,Email,Addrss,Tel,Brith_Date,profile_image,User_password) VALUES (?, ?, ? , ?, ?,?,?)'
            , [name, email,address,tel,birth_date,buffer,user_password]);

        return NextResponse.json({result,message:"Add user success"})
    
    }catch(error){
        console.log("Error ");
        return NextResponse.json({error:error.message})
    }
} 