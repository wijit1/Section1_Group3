import React from 'react'
import Link from 'next/link';

export default function Footer() {
 return (
   <div class="mt-60">
    <div class="container mx-auto flex justify-between">
            <div>
                <h3 className="text-lg font-semibold">About Us</h3>
                <p className="text-gray-700 mt-2">
                บริษัท Destiny Bear Toy Store จำกัด<br></br>
                เราเป็นตัวแทนจำหน่ายผลิตภัณฑ์ของเล่นและของสะสมมีให้เลือกหลายแบบ ทุกชิ้นเป็นของแท้ ของใหม่<br></br> 
                มือ 1 บรรจุกล่องพร้อมจัดส่ง ภายใต้เครื่องหมายการค้าหลาย      
                แบรนด์จากประเทศญี่ปุ่นอย่างเป็นทางการ 
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-gray-700 mt-2 font-mono">999 ถ.พุทธมณฑลสาย 4 ตำบล ศาลายา อำเภอพุทธมณฑลสาย นครปฐม 73170</p>
            </div>

            <div>
                <p>ข่าวเกี่ยวกับของเล่น</p>
                <Link className='hover:text-blue-400 hover:underline text-2xl text-red-400 font-bold' href={'/newsp'}>News TOYS</Link>
            </div>
        </div>
   </div>
  );
}