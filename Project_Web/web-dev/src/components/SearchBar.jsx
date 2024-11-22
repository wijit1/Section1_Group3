'use client'

import React, { useContext, useEffect, useState } from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'
import { ShopContext  } from '@/context/ShopContext'
export const SearchBar = () => {

  const {search,setSearch} = useContext(ShopContext);



  return (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none  bg-inherit text-3xl' type="text" placeholder='Search' />
            <button><Image  className='w-7 rotate-[265deg] cursor-pointer hover:scale-125 duration-700 hover:duration-300 ' alt='Search bar Icon' src={assests.search}/></button>
        </div>

    </div>
  )
}
