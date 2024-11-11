import { assests } from "../../assets/assets";
import Image from "next/image";


export default function ProductList({id,name,detail,brand,price,stock,image}) {

    return (
        <div className="border border-red-500 w-full">
            <tr key={id} className="border-t flex justify-between">
                <td className="px-4 py-3 text-gray-600 flex gap-5">{id}</td>
                <td className="px-4 py-3">
                    <div className="flex items-center">
                        <Image src={image} width={50} height={50} alt="Product Image "/>
                        {/* <img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 rounded" /> */}
                        <span className="ml-4 w-14 text-gray-700">{name}</span>
                    </div>
                </td>
                
                <td className="flex flex-wrap  py-3 text-gray-600 border border-green-500 w-48">{detail}</td>
                <td className="px-4 py-3 text-gray-600 ">{stock}</td>
                <td className="px-4 py-3 text-gray-600">{brand}</td>
                <td className="px-4 py-3 text-gray-600 flex mt-5 ">{price}
                    <Image src={assests.dollar} alt="coin" className="w-5 h-5 ml-1" />
                </td>
                <td className="px-4 py-3">
                    <div className="flex space-x-2">
                        <button className="p-2 text-red-500 hover:text-red-700">
                            <Image src={assests.trash} alt="ลบ" className="w-5 h-5 ml-3" />Delete
                        </button>
                        <button className="p-2 text-blue-500 hover:text-blue-700">
                            <Image src={assests.setting} alt="แก้ไข" className="w-5 h-5 ml-2" />Edits
                        </button>
                    </div>
                </td>
            </tr>
        </div>
    );
}