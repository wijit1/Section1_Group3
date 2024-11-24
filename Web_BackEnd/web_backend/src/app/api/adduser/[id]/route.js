import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";

export async function PUT(req, { params }) {
    const { id } = params;
    const formData = await req.formData();

    try {
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const tel = formData.get('tel')
        const birth_date = formData.get('birth_date')
        const image = formData.get('imageProfile')
        const password = formData.get('user_password')


        if (image instanceof File && image.size > 0) {
            const imageByteData = await image.arrayBuffer();
            const buffer = Buffer.from(imageByteData);
            const db = await createConnection();
            const [result] = await db.query(
                'UPDATE user_acc SET User_Name = ?, Addrss = ? , Email = ? ,Tel = ? , Brith_Date = ?,profile_image = ? , User_password = ? WHERE User_ID = ?  '
                , [name, address, email, tel, birth_date, buffer, password, id]);

            return NextResponse.json({ result, message: "Update User success" })
        } else {
            const db = await createConnection();
            const [result] = await db.query(
                'UPDATE user_acc SET User_Name = ?, Addrss = ? , Email = ? ,Tel = ? , Brith_Date = ?, User_password = ? WHERE User_ID = ?  '
                , [name, address, email, tel, birth_date, password, id]);

            return NextResponse.json({ result, message: "Update User success" })
        };



    } catch (error) {
        console.log("Error ");
        return NextResponse.json({ error: error.message })
    }
}