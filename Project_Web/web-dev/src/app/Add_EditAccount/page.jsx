import { assests } from "../../../assets/assets";
import Image from "next/image";
import BackButton from "@/components/backbutton";
export default function Add_EditAccount() {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                <BackButton />
                    {/* <button className="bg-green-400 p-2 rounded-lg">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                 </button> */}
                    <h1 className="text-7xl font-bold mt-1">ADD &amp; Edit Account</h1>
                </div>
                {/* Form Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {/* Profile Section */}
                        {/* <h2 class="text-xl font-semibold">Profile</h2> 
      <br> Profile แบบนอกกรอบ */}
                        <div className="bg-white p-6 rounded-xl ring-offset-2 ring-2 ring-black">
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-xl font-semibold">Profile</h2>
                                <Image src={assests.user} width={25} />
                            </div>
                            <div className="space-y-4">
                                <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                                    <Image src={assests.moodeng} width={130} />
                                </div>
                                <button className="text-gray-500 text-sm">Add Image</button>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg ring-offset-2 ring-2 ring-black" />
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div>
                        {/* <h2 class="text-xl font-semibold">Information</h2>
      <br> Information แบบนอกกรอบ */}
                        <div className="bg-white p-6 rounded-xl ring-offset-2 ring-2 ring-black">
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-xl font-semibold">Information</h2>
                                <Image src={assests.photo_book} width={25} />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <div className="relative">
                                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 " />
                                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                            <Image src={assests.mail} width={25} />
                                        </div>
                                    </div>
                                    <div>
                                        <br />
                                        <label className="block text-gray-700 mb-2">Address</label>
                                        <div className="relative">
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Image src={assests.address} width={25} />
                                            </div>
                                        </div>
                                        <div>
                                            <br />
                                            <label className="block text-gray-700 mb-2">Tel</label>
                                            <div className="relative">
                                                <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                    </div></div></div>

        </div>
    );
}