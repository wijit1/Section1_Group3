import jwt from 'jsonwebtoken';

const SECRET_KEY = 'User_Login'; 


export function generateToken(user) {
  return jwt.sign({ id: user.User_ID, username: user.User_Name }, SECRET_KEY, { expiresIn: '1h' });
}