import { createConnection } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json({ message: 'Please provide username and password' }, { status: 400 });
        }

        const db = await createConnection();

        const [rows] = await db.query('SELECT * FROM user_acc WHERE User_Name = ?', [username]);

        if (rows.length === 0) {
            return NextResponse.json({ message: 'User not found' }, { status: 401 });
        }

        const user = rows[0];

        // ตรวจสอบรหัสผ่าน เพิ่ม .trim() ในการตรวจสอบ user.User_password เพื่อแก้ปัญหาช่องว่างที่อาจถูกเพิ่มโดยไม่ได้ตั้งใจในฐานข้อมูล
        const isMatch = await bcrypt.compare(password, user.User_password.trim());
        if (!isMatch) {
            return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
        }

        return NextResponse.json({
            message: 'Login successful',
            user: { id: user.User_ID, username: user.User_Name }
        }, { status: 200 });

    } catch (error) {
        console.error("Error in POST /api/login:", error);
        return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    }
}
