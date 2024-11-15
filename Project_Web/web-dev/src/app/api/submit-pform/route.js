import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";


export async function POST(req){
    const formData = await req.formData(); 
    
    try{
        const name = formData.get('name');
        const detail = formData.get('detail');
        const price = formData.get('price');
        const stock = formData.get('stock');
        const image = formData.get('image');
        const brand = formData.get('brand');
        const category = formData.get('category');
        
        // Convert file image to buffer data  

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const db = await createConnection();
        const [result] = await db.query(
            'INSERT INTO itemproduct (P_Name,Detail,Stock,Brand,Price,Picture) VALUES (?, ?, ? , ?, ?,?)'
            , [name, detail,stock,brand,price,buffer]);

        return NextResponse.json({result,message:"Add product success"})
    
    }catch(error){
        console.log("Error ");
        return NextResponse.json({error:error.message})
    }
} 


