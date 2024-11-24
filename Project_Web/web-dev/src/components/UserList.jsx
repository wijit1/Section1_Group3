import { assests } from "../../assets/assets";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

export default function UserList({ id, name, Address, Email, Tel, bd, image }) {

    const handleDelete = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/getuser', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            })
            if (res.ok) {
                toast.success(`Delete ${id} user Success`)
                console.log(`Delete ${id} user Success`);
            } else {
                console.log('Error Cannot Delete ');
            }
        } catch (error) {
            console.log('Error:', error);

        }
    }

    return (
        <tr key={id} className="border-t border-gray-200">
            <td className="px-4 py-3 text-gray-600 w-1/12 text-xl">{id}</td>

            <td className="px-4 py-3 w-2/12">
                <div className="flex items-center">
                    {image?(
                        <Image src={image} width={50} height={50} alt="Product Image" />
                    ):(
                        null
                    )}
                    <span className="ml-4 w-14 text-gray-700 text-xl">{name}</span>
                </div>
            </td>

            <td className="py-3 text-gray-600  w-2/12 break-words text-xl">{Address}</td>

            <td className="px-4 py-3 text-gray-600 w-1/12 text-xl">{Email}</td>

            <td className="px-4 py-3 text-gray-600 w-1/12 text-xl">{Tel}</td>

            <td className="px-4 py-3 text-gray-600  items-center w-1/12 text-xl">
                {bd}
            </td>

            <td className="px-4 py-3 w-1/12  text-center ">
                <button onClick={handleDelete} className="p-2 text-red-500 hover:text-red-700 border-blue-900 text-xl">
                    <Image src={assests.trash} alt="Delete" className="w-5 h-5 ml-4" />
                    Delete
                </button>

                <button className="p-2 text-blue-500 hover:text-blue-700 text-xl">
                    <Link href={`Add_EditAccount/${id}`}>
                        <Image src={assests.setting} alt="Edit" className="w-5 h-5 ml-2" />
                        Edit
                    </Link>
                </button>
            </td>

        </tr>
    );
}
