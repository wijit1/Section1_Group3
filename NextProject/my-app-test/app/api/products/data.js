

export default async function handler(req,res) {

    if (req.method === 'GET') {
        // ตัวอย่างการตอบกลับข้อมูลแบบ GET
        const data = { message: "Hello from GET request!" };
        res.status(200).json(data);
    } else if (req.method === 'POST') {
        // ตัวอย่างการรับข้อมูลและตอบกลับแบบ POST
        console.log("This is method POST ");
        
        // const { search } = req.body; // รับค่าจาก request body
        // res.status(200).json({ message: `Hello, ${search}!` });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
} 



}