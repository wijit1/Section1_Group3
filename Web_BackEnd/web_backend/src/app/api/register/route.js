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

        // สร้างการเชื่อมต่อกับฐานข้อมูล
        const db = await createConnection();

        // เข้ารหัสรหัสผ่าน
        const hashedPassword = await bcrypt.hash(password, 10);

        // เพิ่มผู้ใช้ใหม่ลงในฐานข้อมูล
        await db.query('INSERT INTO user_acc (User_Name, User_password) VALUES (?, ?)', [username, hashedPassword]);

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

    } catch (error) {
        console.error("Error in POST /api/register:", error);
        return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    }
}
