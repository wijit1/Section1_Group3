
import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";

export async function PUT(req,{params}){
    const {id}= params;
    const formData = await req.formData(); 
    try{
        const name = formData.get('name');
        const detail = formData.get('detail');
        const price = formData.get('price');
        const stock = formData.get('stock');
        const image = formData.get('image');
        const brand = formData.get('brand');
        const category = formData.get('category');

        

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const db = await createConnection();
        const [result] = await db.query(
            'UPDATE itemproduct SET P_Name = ? ,Detail = ?, Price = ? , Stock = ? ,Brand = ? , Picture = ? WHERE P_ID = ?  '
            , [name, detail,price,stock,brand,buffer,id]);
    
        return NextResponse.json({result,message:"Update product success",image})


    }catch(error){
        console.log("Error ");
        return NextResponse.json({error:error.message})
    }
}