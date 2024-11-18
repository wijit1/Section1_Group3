import React, { useContext } from 'react'
import Image from 'next/image'
import { assests } from '../../assets/assets'
import { ShopContext } from '@/context/ShopContext';

export default function MeowPass() {
    const {check,setCheck} = useContext(ShopContext);
    const handleLogOut = ()=>{
        setCheck(false);
    }
  return (
    <div className='my-36 flex flex-col justify-center items-center gap-10 text-3xl'>
        <Image src={assests.meow} width={400} height={400}/>
        <div className='flex gap-10 justify-center items-end'>
            <h1 className='border-8  border-gray-700 rounded-xl  p-7 bg-green-300'>Login Successful!!</h1>
            <button onClick={handleLogOut} className='border-8  hover:bg-red-800  hover:duration-700 duration-500  border-gray-700 rounded-xl  p-4 bg-red-500 text-white'>Logout</button>
        </div>
    </div>
  )
}
