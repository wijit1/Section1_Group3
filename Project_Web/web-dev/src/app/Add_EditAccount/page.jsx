'use client'
import { useEffect, useState, useContext } from "react";
import { assests } from "../../../assets/assets";
import Image from "next/image";
import { toast } from "sonner";
import UploadImage from "@/components/UploadImage";
import { ShopContext } from "@/context/ShopContext";
import BackButton from "@/components/backbutton";
import UploadProfile from "@/components/UploadProfile";
export default function Add_EditAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [birth_date, setBirth_date] = useState('');

    const { imageProfile, setImageProfile } = useContext(ShopContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('tel', tel);
        formData.append('birth_date', birth_date);
        formData.append('image', imageProfile);
        try {
            const response = await fetch('/api/adduser', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                toast.success('Form submitted successfully')
                console.log("Form submitted successfully");

            } else {
                console.log('Error submitting form');
            }
        } catch (error) {
            console.error("Error: ", error);

        }
        setName('');
        setEmail('');
        setAddress('');
        setTel('');
        setBirth_date('');
        setImageProfile(null);

    }

    
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <BackButton />
                    <h1 className="text-7xl font-bold mt-1">ADD &amp; Edit Account</h1>
                </div>
                {/* Form Container */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-4">
                            {/* Profile Section */}

                            <div className="bg-white p-6 rounded-xl ring-offset-2 ring-2 ring-black">
                                <div className="flex items-center gap-2 mb-6">
                                    <h2 className="text-xl font-semibold">Profile</h2>
                                    <Image src={assests.user} width={25} />
                                </div>
                                <div className="space-y-4">
                                    <UploadProfile/>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Name</label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg
                                                focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Birth Date Section */}
                            <div className="p-1 rounded-xl">
                                <div className="flex items-center gap-2 mb-6">
                                    <h2 className="text-xl font-semibold">Birth Date</h2>
                                </div>
                                <div className="relative">
                                    <input type="date" className="w-full p-3 border border-gray-300 
                                    rounded-lg ring-offset-2 ring-2 ring-black" onChange={(e)=>setBirth_date(e.target.value)} name="birth_date"/>
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div>
                            <div className="bg-white p-6 rounded-xl ring-offset-2 ring-2 ring-black">
                                <div className="flex items-center gap-2 mb-6">
                                    <h2 className="text-xl font-semibold">Information</h2>
                                    <Image src={assests.photo_book} width={25} />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <div className="relative">
                                            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12" onChange={(e)=>setEmail(e.target.value)} name="email" />
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Image src={assests.mail} width={25} />
                                            </div>
                                        </div>
                                        <div>
                                            <br />
                                            <label className="block text-gray-700 mb-2">Address</label>
                                            <div className="relative">
                                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg 
                                                focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12" onChange={(e)=>setAddress(e.target.value)} name="address"/>
                                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                    <Image src={assests.address} width={25} />
                                                </div>
                                            </div>
                                            <div>
                                                <br />
                                                <label className="block text-gray-700 mb-2">Tel</label>
                                                <div className="relative">
                                                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg 
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12" nChange={(e)=>setTel(e.target.value)} name="tel" />
                                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                        <Image src={assests.phone_call} width={25} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Buttons */}
                                <br />
                                <br />
                                <div className="flex justify-end gap-4 mt-40">
                                    <button className="px-8 py-3 bg-red-400 text-black rounded-lg hover:bg-red-500 transition-colors">
                                        Clear
                                    </button>
                                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                        Add Product
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}