"use client";

import { useState } from 'react';
import { assests } from "../../../assets/assets";
import Image from "next/image";
import BackButton from "@/components/backbutton";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            console.log('Response status:', res.status); // ตรวจสอบสถานะการตอบสนองจาก API

            const data = await res.json().catch(() => {
                // ตรวจสอบ JSON ที่ได้รับ ถ้าแปลง JSON ไม่ได้ให้แสดงข้อผิดพลาด
                console.error('Error parsing JSON:', res);
                throw new Error('Received response is not valid JSON');
            });

            if (res.ok) {
                setMessage('Login successful!');
                console.log('Data received:', data); // แสดงข้อมูลที่ได้รับจาก API
            } else {
                setMessage(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Something went wrong');
        }
    };

    return (
        <div>
            <div className="m-5 ml-44">
                <BackButton />
            </div>
            <div className="flex justify-center items-center h-96 px-5">
                <div className="mr-2 rounded-md ">
                    <Image src={assests.bearlogin} alt="Bear Image" className="rounded-md w-[850px]" />
                </div>
                <div className="bg-[#FFF2D4] rounded-3xl p-7 shadow-md w-[350px] text-center">
                    <form onSubmit={handleLogin}>
                        <h1 className="text-2xl mb-5 font-bold">Login</h1>
                        <div className="mb-4 text-left relative">
                            <label className="block">Username</label>
                            <Image
                                src={assests.mail}
                                alt="username icon"
                                width={20}
                                height={20}
                                className="absolute left-3 top-10 transform -translate-y-1/2 mt-2"
                            />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Your Username"
                                required
                                className="w-full p-2 pl-10 rounded-md border border-[#C4A484] bg-white text-lg"
                            />
                        </div>
                        <div className="mb-4 text-left relative">
                            <label className="block">Password</label>
                            <Image
                                src={assests.key}
                                alt="password icon"
                                width={20}
                                height={20}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-2"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="**********"
                                required
                                className="w-full p-2 pl-10 rounded-md border border-[#C4A484] bg-white text-lg"
                            />
                        </div>
                        <button type="submit" className="bg-[#F5CE85] hover:bg-[#E8B960] text-[#4D331C] text-lg font-medium w-full py-2 rounded-md">
                            Log-in
                        </button>
                    </form>
                    {message && <p className="mt-4 text-red-500">{message}</p>}
                    <div className="mt-2">
                        <a href="#" className="text-[#8C6445] text-sm">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
