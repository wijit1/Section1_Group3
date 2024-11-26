"use client"; // Add this line at the top
import React, { useContext, useState } from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'
import PriceRangeFilter from './PriceRangeFilter';
import { ShopContext } from '@/context/ShopContext';
import { SearchBar_Band_Option } from './SearchBar_band_option';

export const Category = () => {

  /* ตั้งไว้ยังไม่โชว์ถ้าไม่กด */
  const [isCategoryOpen1, setIsCategoryOpen1] = useState(false)
  const [isCategoryOpen2, setIsCategoryOpen2] = useState(false)
  const {setCategory,setBrand,category} = useContext(ShopContext);

  const toggleCategory1 = () => setIsCategoryOpen1(!isCategoryOpen1)
  const toggleCategory2 = () => setIsCategoryOpen2(!isCategoryOpen2)

  return (
    <div className='flex flex-col min-w-72 '>
      <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

      {/* First Category Section */}
      <div onClick={toggleCategory1} className='flex items-center justify-between border border-gray-300 bg-yellow-100 p-3 mt-6 cursor-pointer'>
        <p className='flex mb-3 text-2xl items-center'>CATEGORIES</p>
        <Image
          className={`duration-700 ${isCategoryOpen1 ? 'rotate-[270deg]' : 'rotate-90'}`}
          src={assests.play}
          width={30}
          height={30}
          alt='Load'
        />
      </div>
      {isCategoryOpen1 && (
        <div className='relative'>
          <div className="p-3 absolute w-full border border-t-0 border-gray-300 bg-yellow-50">
            <p onClick={(e)=>setCategory('All')} className={`hover:text-red-400 hover:underline cursor-pointer ${category == "All" ?('text-red-400'):(null)}`}>All</p>
            <p onClick={(e)=>setCategory('Super Sale 2024')} className={`hover:text-red-400 hover:underline cursor-pointer ${category == "Super Sale 2024" ?('text-red-400'):(null)}`}>Super Sale 2024</p>
            <p onClick={(e)=>setCategory('New Release')} className={`hover:text-red-400 hover:underline cursor-pointer ${category == "New Release" ?('text-red-400'):(null)}`}>New Release</p>
            <p onClick={(e)=>setCategory('Premium Super Exclusive')} className={`hover:text-red-400 hover:underline cursor-pointer ${category == "Premium Super Exclusive" ?('text-red-400'):(null)}`}>Premium Super Exclusive</p>
          </div>
        </div>
      )}

      {/* Second Brand  Section */}
  
      <div onClick={toggleCategory2} className='flex items-center justify-between border border-gray-300 bg-yellow-100 p-3 mt-6 cursor-pointer'>
        <p className='flex mb-3 text-2xl items-center'>Brand</p>
        <Image
          className={`duration-700 ${isCategoryOpen2 ? 'rotate-[270deg]' : 'rotate-90'}`}
          src={assests.play}
          width={30}
          height={30}
          alt='This is Branding search'
        />
      </div>

{isCategoryOpen2 && (
  <div className='relative'>
    <div className="p-3 absolute w-full border border-t-0 border-gray-300 bg-yellow-50">
      {/* ใช้ SearchBar แทนที่ options */}
      <SearchBar_Band_Option />
    </div>
  </div>
)}


      <div className="mt-6">
      <PriceRangeFilter/>
      </div>
    </div>
  )
}
