import db from '@/lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password' });
    }

    try {
        // ดึงข้อมูลผู้ใช้จากฐานข้อมูล
        const [rows] = await db.query('SELECT * FROM user_acc WHERE User_Name = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = rows[0];

        // ตรวจสอบรหัสผ่าน
        const isMatch = await bcrypt.compare(password, user.User_password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // หากเข้าสู่ระบบสำเร็จ
        res.status(200).json({ message: 'Login successful', user: { id: user.User_ID, username: user.User_Name } });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
