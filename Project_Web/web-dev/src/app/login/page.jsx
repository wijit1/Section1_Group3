import { assests } from "../../../assets/assets";
import Image from "next/image";
export default function login() {
    return (
        <div>
            <div className="flex flex-col items-center m-5 border border-red-950 w-24 bg-green-400 rounded-2xl ml-44">
                <div href="#515515151" className="text-black hover:text-green-800 font-semibold text-lg py-2 px-4 rounded ">←Back</div>
            </div>
            {/* Main Content */}
            <div className="flex justify-center items-center h-96 px-5">
                {/* Bear Image */}
                <div className="mr-2 rounded-md ">
                    <Image src={assests.bearlogin} alt="Bear Image" className="rounded-md w-[850px]" />
                </div>
                {/* Login Box */}
                <div className="bg-[#FFF2D4] rounded-3xl p-7 shadow-md w-[350px] text-center">
                    <form>
                        <h1 className="text-2xl mb-5 font-bold">Login</h1>
                        <div className="mb-4 text-left  relative">
                            <label className="block">Username</label>

                            {/* ใส่ไอคอนด้วย <Image /> */}
                            <Image
                                src={assests.mail}
                                alt="username icon"
                                width={20}
                                height={20}
                                className="absolute left-3 top-10 transform -translate-y-1/2 mt-2"
                            />

                            {/* ช่องกรอกข้อมูล */}
                            <input
                                type="text"
                                name="username"
                                placeholder="Your Username"
                                required
                                id="username"
                                className="w-full p-2 pl-10 rounded-md border border-[#C4A484] bg-white text-lg "
                            />
                        </div>

                        <div className="mb-4 text-left  relative">
                            <label className="block">Password</label>

                            {/* ใส่ไอคอนด้วย <Image /> */}
                            <Image
                                src={assests.key}
                                alt="password icon"
                                width={20}
                                height={20}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-2"
                            />

                            {/* ช่องกรอกรหัสผ่าน */}
                            <input
                                type="password"
                                name="password"
                                placeholder="**********"
                                required
                                className="w-full p-2 pl-10 rounded-md border border-[#C4A484] bg-white text-lg"
                            />
                        </div>

                        <button type="submit" className="bg-[#F5CE85] hover:bg-[#E8B960] text-[#4D331C] text-lg font-medium w-full py-2 rounded-md">
                            Log-in
                        </button>
                    </form>
                    <div className="mt-2">
                        <a href="#" className="text-[#8C6445] text-sm">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}