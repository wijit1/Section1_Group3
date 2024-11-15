import { createConnection } from '@/lib/db';
import bcrypt from 'bcryptjs';
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

        // ตรวจสอบรหัสผ่าน
        // const isMatch = await bcrypt.compare(password, user.User_password);
        // console.log('Password match result:', isMatch);
        if(password===user.User_password){
            
            console.log('User password from DB:', user.User_password);
            console.log('Password entered by user:', password);
            return NextResponse.json({
                message: 'Login successful',check: true,
                user: { id: user.User_ID, username: user.User_Name }
            }, { status: 200 });
        }else{
            return NextResponse.json({
                message: 'password not match',check: false
            })
        }

        // if (!isMatch) {
        //     return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
        // }

        return NextResponse.json({
            message: 'Login successful',
            user: { id: user.User_ID, username: user.User_Name }
        }, { status: 200 });

    } catch (error) {
        console.error("Error in POST /api/login:", error);
        return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    }
}
