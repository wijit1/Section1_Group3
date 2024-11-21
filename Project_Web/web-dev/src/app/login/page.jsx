"use client";

import { useContext, useState,useEffect } from 'react';
import { assests } from "../../../assets/assets";
import Image from "next/image";
import BackButton from "@/components/backbutton";
import { ShopContext } from '@/context/ShopContext';
import MeowPass from '@/components/MeowPass';
import Cookies from 'js-cookie';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    // const [token, setToken] = useState(null);
    const {token,setToken} = useContext(ShopContext);


    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
                document.cookie = `token=${data.token}; path=/; max-age=3600`;
                setMessage(data.message);
                console.log('Data received:', data);
                const tokenFromCookie =  Cookies.get('token');
                setToken(tokenFromCookie);
            }else{
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Something went wrong');
        }
    };

    useEffect(()=>{
        const tokenFromCookie =  Cookies.get('token');
        setToken(tokenFromCookie);
    },[])

    return (!token?
        <div>
            <div className="m-5 ml-44">
                <BackButton />
            </div>
            <div className="flex justify-center items-center h-96 px-5">
                <div className="mr-2 rounded-md">
                    <Image src={assests.bearlogin} alt="Bear Image" className="rounded-md w-[850px]" />
                </div>
                <div className="bg-[#FFF2D4] rounded-3xl p-7 shadow-md w-[350px] text-center">
                    <form onSubmit={handleLogin}>
                        <h1 className="text-2xl mb-5 font-bold">Login</h1>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                            className="w-full p-2 mb-4 rounded-md border bg-white"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full p-2 mb-4 rounded-md border bg-white"
                        />
                        <button type="submit" className="w-full py-2 bg-[#F5CE85] hover:bg-[#E8B960] rounded-md">
                            Log-in
                        </button>
                    </form>
                    {message && <p className="mt-4 text-red-500">{message}</p>}
                </div>
            </div>
        </div>
    :(
        <>
            <MeowPass/>
        </>
    ))
}
