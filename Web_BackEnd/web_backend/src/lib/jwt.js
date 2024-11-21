import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_jwt_secret'; // ตั้งค่า secret key ของคุณ

// ฟังก์ชันสำหรับสร้าง JWT
export function generateToken(user) {
  return jwt.sign({ id: user.User_ID, username: user.User_Name }, SECRET_KEY, { expiresIn: '1h' });
}

// ฟังก์ชันสำหรับตรวจสอบ JWT
export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; // หากตรวจสอบ JWT ไม่ผ่าน
  }
}