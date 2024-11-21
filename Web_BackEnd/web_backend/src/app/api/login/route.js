import { createConnection } from '@/lib/db';
import { generateToken } from '@/lib/jwt';
// import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { username, password } = body;

        const db = await createConnection();

        // ค้นหาผู้ใช้จากฐานข้อมูลตาม username
        const [rows] = await db.query('SELECT * FROM user_acc WHERE User_Name = ?', [username]);

        console.log('Database rows:', rows); // ตรวจสอบข้อมูลที่ดึงมา

        if (rows.length === 0) {
            return NextResponse.json({ message: 'User not found' }, { status: 401 });
        }

        const user = rows[0];
        console.log('User password from DB:', user.User_password);
        console.log('Password entered by user:', password);

        if(password===user.User_password){

            const token = generateToken(user);
            
            console.log('User password from DB:', user.User_password);
            console.log('Password entered by user:', password);


            return NextResponse.json({message: 'Login successful',check: true,token}, { status: 200 });


        }else{
            return NextResponse.json({
                message: 'password not match',check: false},{ status: 404 })
        }


    } catch (error) {
        console.error("Error in POST /api/login:", error);
        return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    }
}
