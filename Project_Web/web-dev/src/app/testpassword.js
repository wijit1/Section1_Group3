const bcrypt = require('bcryptjs');

const password = '123';
const hashedPassword = '$2a$10$E6NfXc0KjZO4lkEqjWIRcuQdl/F9Rm6vEXlkN5mbYo91mWr6EvYPK';

bcrypt.compare(password, hashedPassword, (err, isMatch) => {
    if (err) throw err;
    console.log(isMatch ? 'รหัสผ่านตรงกัน' : 'รหัสผ่านไม่ตรงกัน');
});