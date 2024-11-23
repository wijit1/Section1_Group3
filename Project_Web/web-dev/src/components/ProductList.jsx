import { toast } from "sonner";
import { assests } from "../../assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function ProductList({ id, name, detail, brand, price, stock, image }) {

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/getproduct', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            })
            if (res.ok) {
                toast.success(`Delete User ID ${id} Success`)
            } else {
                toast.error(`Error Cannot Delete User ID ${id} `)
            }
        } catch (error) {
            console.log('Error:', error);

        }
    }
    return (
        <tr key={id} className="border-t border-gray-200">
            <td className="px-4 py-3 text-gray-600 w-1/12 text-xl">{id}</td>

            <td className="px-4 py-3 w-2/12">
                <div className="w-44 h-44 overflow-hidden flex items-center justify-center ">
                    <img
                        src={image}
                        alt="Product Image"
                        className="object-cover  w-full h-full "
                    />
                </div>
                <span className=" text-gray-700 text-xl break-words">{name}</span>
            </td>

            <td className="py-3 text-gray-600  w-2/12 break-words  text-xl">{detail}</td>

            <td className="px-4 py-3 text-gray-600 w-1/12 pl-9  text-xl">{stock}</td>

            <td className="px-4 py-3 text-gray-600 w-1/12  text-xl">{brand}</td>

            <td className="px-4 py-3 text-gray-600  items-center w-1/12  text-xl">
                <div className="flex ">
                    {price}
                    <Image src={assests.dollar} alt="coin" className="w-5 h-5 ml-1" />
                </div>
            </td>

            <td className="px-4 py-3 w-1/12  text-center ">
                <button onClick={handleDelete} className="p-2 text-red-500 hover:text-red-700 border-blue-900  text-xl">
                    <Image src={assests.trash} alt="Delete" className="w-7 h-7 ml-3 " />
                    Delete
                </button>

                <button className="p-2 text-blue-500 hover:text-blue-700  text-xl">
                    <Link href={`/edit_product/${id}`}>
                        < Image src={assests.setting} alt="Edit" className="w-7 h-7 ml-1" />
                        Edit
                    </Link>
                </button>
            </td>

        </tr>
    );
}
