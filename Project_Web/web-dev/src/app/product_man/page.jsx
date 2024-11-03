import { assests } from "../../../assets/assets";
import Image from "next/image";
export default function product_man() {
 return (
   <div>
    <div className="flex justify-items-end items-center m-5 pl-60">
    <div className="flex items-center m-5 border border-red-950 w-24 h-14 bg-green-400 rounded-3xl ">
      <div href="#515515151" className="text-black hover:text-green-800 font-semibold text-lg py-2 px-4 rounded ">←Back</div>
    </div>
    <div className="font-bold text-7xl">
      Product/Service Management
    </div>
  </div>
  {/*Search Bar */}
  <div className="flex ml-56 pl-4 ">
    <input type="text" placeholder="Search in product" className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none " />
    <button className="bg-yellow-500 text-black px-4 rounded-r-lg hover:bg-yellow-600  mr-96"><Image src={assests.search} alt className=" w-7 h-7 mt-3 ml-4 " />
      Search
    </button>
    {/* นึกภาพไม่ออกว่าจะเป็นยังไง เลยทำปุ่มไว้ก่อนเฉยๆ*/}
    <button className="font-semibold bg-yellow-500 text-black px-8 py-3 hover:bg-yellow-600 mr-60 rounded-2xl whitespace-nowrap">Add
      Product</button>
  </div>
  {/* ยังไม่เก็ตว่าจะดึง sql มาแบบไหน ให้ gpt ช่วยเอาตารางมาก่อนเดะค่อยกลับไปแก้ใหม่ตอนลิงฉลาดกว่านี้*/}
  <div className="overflow-x-auto mt-8 mr-60 ml-60">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">ID</th>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">Product</th>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">Detail</th>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">Stock</th>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">Brand</th>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">Price</th>
          <th className="px-4 py-2 text-gray-700 font-medium text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Product Row Example */}
        <tr className="border-t">
          <td className="px-4 py-3 text-gray-600">001</td>
          <td className="px-4 py-3">
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 rounded" />
              <span className="ml-4 text-gray-700">Bumper Car Luffy</span>
            </div>
          </td>
          <td className="px-4 py-3 text-gray-600">Release in 2025<br />Limited Edition For One Piece Anniversary
          </td>
          <td className="px-4 py-3 text-gray-600 ">15</td>
          <td className="px-4 py-3 text-gray-600">Moon Studio</td>
          <td className="px-4 py-3 text-gray-600 flex mt-5 ">3200
            <Image src={assests.dollar} alt="coin" className="w-5 h-5 ml-1" /> </td> 
          <td className="px-4 py-3">
            <div className="flex space-x-2">
              {/* Trash Icon */}
              <button className="p-2 text-red-500 hover:text-red-700 "> <Image src={assests.trash} alt="coin" className="w-5 h-5 ml-3" />Delete</button>
              {/* Edit Icon */}
              <button className="p-2 text-blue-500 hover:text-blue-700"><Image src={assests.setting} alt="coin" className="w-5 h-5 ml-2" />Edits</button>
            </div>
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
   </div>
  );
}