import { assests } from "../../assets/assets";
import Image from "next/image";

export default function ProductList({ id, name, detail, brand, price, stock, image }) {
    return (
        <table className="border-collapse w-full table-fixed">
            <tbody>
                <tr key={id} className="border-t flex justify-between items-center">
                    {/* คอลัมน์ ID */}
                    <td className="px-4 py-3 text-gray-600 w-1/12">{id}</td>

                    {/* คอลัมน์ Image และชื่อสินค้า */}
                    <td className="px-4 py-3 w-2/12">
                        <div className="flex items-center">
                            <Image src={image} width={50} height={50} alt="Product Image" />
                            <span className="ml-4 w-14 text-gray-700">{name}</span>
                        </div>
                    </td>

                    {/* คอลัมน์รายละเอียด */}
                    <td className="py-3 text-gray-600 border border-green-500 w-2/12 break-words">{detail}</td>

                    {/* คอลัมน์ Stock */}
                    <td className="px-4 py-3 text-gray-600 w-1/12">{stock}</td>

                    {/* คอลัมน์ Brand */}
                    <td className="px-4 py-3 text-gray-600 w-1/12">{brand}</td>

                    {/* คอลัมน์ราคา */}
                    <td className="px-4 py-3 text-gray-600 flex items-center w-1/12">
                        {price}
                        <Image src={assests.dollar} alt="coin" className="w-5 h-5 ml-1" />
                    </td>

                    {/* คอลัมน์ปุ่ม Delete และ Edit */}
                    <td className="px-4 py-3 w-1/12 mr-4">
                        <div className="flex space-x-2">
                            <button className="p-2 text-red-500 hover:text-red-700">
                                <Image src={assests.trash} alt="ลบ" className="w-5 h-5 ml-3" />
                                Delete
                            </button>
                            <button className="p-2 text-blue-500 hover:text-blue-700">
                                <Image src={assests.setting} alt="แก้ไข" className="w-5 h-5 ml-2" />
                                Edits
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
