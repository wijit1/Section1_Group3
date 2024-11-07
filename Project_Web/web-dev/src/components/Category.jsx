"use client"; // Add this line at the top

import React, { useState } from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'

export const Category = () => {
  /* ตั้งไว้ยังไม่โชว์ถ้าไม่กด */
  const [isCategoryOpen1, setIsCategoryOpen1] = useState(false)
  const [isCategoryOpen2, setIsCategoryOpen2] = useState(false)

  const toggleCategory1 = () => setIsCategoryOpen1(!isCategoryOpen1)
  const toggleCategory2 = () => setIsCategoryOpen2(!isCategoryOpen2)

  return (
    <div className='flex flex-col min-w-72'>
      <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

      {/* First Category Section */}
      <div onClick={toggleCategory1} className='flex items-center justify-between border border-gray-300 bg-yellow-100 p-3 mt-6 cursor-pointer'>
        <p className='flex mb-3 text-2xl items-center'>CATEGORIES</p>
        <Image
          className={`duration-700 ${isCategoryOpen1 ? 'rotate-[270deg]' : 'rotate-90'}`}
          src={assests.play}
          width={30}
          height={30}
        />
      </div>
      {isCategoryOpen1 && (
        <div className="p-3 border border-t-0 border-gray-300 bg-yellow-50">
          <p class="hover:text-red-400 hover:underline">Super Sale 2024</p>
          <p class="hover:text-red-400 hover:underline">New Release</p>
          <p class="hover:text-red-400 hover:underline">Premium Super Exolusive</p>
        </div>
      )}

      {/* Second Category Section */}
      <div onClick={toggleCategory2} className='flex items-center justify-between border border-gray-300 bg-yellow-100 p-3 mt-6 cursor-pointer'>
        <p className='flex mb-3 text-2xl items-center'>Brand</p>
        <Image
          className={`duration-700 ${isCategoryOpen2 ? 'rotate-[270deg]' : 'rotate-90'}`}
          src={assests.play}
          width={30}
          height={30}
        />
      </div>
      {isCategoryOpen2 && (
        <div className="p-3 border border-t-0 border-gray-300 bg-yellow-50 ">
          <p class="hover:text-red-400 hover:underline">Brand A</p>
          <p class="hover:text-red-400 hover:underline">Brand B</p>
          <p class="hover:text-red-400 hover:underline">Brand C</p>
        </div>
      )}
    </div>
  )
}
