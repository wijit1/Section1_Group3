import { assests } from "../../assets/assets";
import Image from "next/image";

export default function ProductList({ id, name, detail, brand, price, stock, image }) {
    return (
        <tr key={id} className="border-t border-gray-200">
            <td className="px-4 py-3 text-gray-600 w-1/12">{id}</td>

            <td className="px-4 py-3 w-2/12">
                <div className="flex items-center">
                    <Image src={image} width={50} height={50} alt="Product Image" />
                    <span className="ml-4 w-14 text-gray-700">{name}</span>
                </div>
            </td>

            <td className="py-3 text-gray-600 border border-green-500 w-2/12 break-words">{detail}</td>

            <td className="px-4 py-3 text-gray-600 w-1/12 pl-9">{stock}</td>

            <td className="px-4 py-3 text-gray-600 w-1/12">{brand}</td>

            <td className="px-4 py-3 text-gray-600 flex items-center w-1/12">
                {price}
                <Image src={assests.dollar} alt="coin" className="w-5 h-5 ml-1" />
            </td>

            <td className="px-4 py-3 w-1/12">
                <div className="flex space-x-2">
                    <button className="p-2 text-red-500 hover:text-red-700">
                        <Image src={assests.trash} alt="Delete" className="w-5 h-5 ml-3" />
                        Delete
                    </button>
                    <button className="p-2 text-blue-500 hover:text-blue-700">
                        <Image src={assests.setting} alt="Edit" className="w-5 h-5 ml-2" />
                        Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}
