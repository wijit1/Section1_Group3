import React from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'
export default function MeowWarning() {
  return (
    <div className='my-36 flex flex-col justify-center items-center gap-10 text-3xl'>
        <Image src={assests.meowAngry} width={400} height={400} alt='You can not acces this page'/>
        <div className='flex gap-10 justify-center items-end'>
            <h1 className='border-8  border-gray-700 rounded-xl  p-7 bg-green-300'>Please Login Before !! </h1>
        </div>
    </div>
  )
}
