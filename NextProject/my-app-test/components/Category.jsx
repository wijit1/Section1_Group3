import React from 'react'
import { assests } from '@/assets/assets'
import Image from 'next/image'

export const Category = () => {
  return (
    <div className='flex flex-col min-w-72'>
        <p className='my-2  text-xl flex items-center cursor-pointer gap-2'>FILTERS </p>
        <div  className='flex items-center justify-between border border-gray-300 bg-yellow-100 p-3 mt-6'>
            <p className='flex mb-3 text-2xl items-center'>CATEGORIES</p>
            <Image className='rotate-90 hover:rotate-[270deg] duration-700 active:rotate-[270deg] ' src={assests.play} width={30} height={30}/>
        </div>

        <div  className='flex items-center justify-between border border-gray-300 bg-yellow-100 p-3 mt-6'>
            <p className='flex mb-3 text-2xl items-center'>CATEGORIES</p>
            <Image className='rotate-90 hover:rotate-[270deg] duration-700 active:rotate-[270deg] ' src={assests.play} width={30} height={30}/>
        </div>
    </div>
  )
}
