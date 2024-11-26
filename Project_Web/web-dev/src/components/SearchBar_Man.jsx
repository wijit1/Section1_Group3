import React, { useContext, useEffect, useState } from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'
import { ShopContext  } from '@/context/ShopContext'
export const SearchBar_Man = () => {

  const {search,setSearch} = useContext(ShopContext);



  return (
    <div className='border-t border-b bg-gray-50 text-center w-max'>
        <div className='inline-flex items-center justify-center border border-gray-400 rounded-xl p-2 '>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none  bg-inherit text-3xl pl-2 w-1/2' type="text" placeholder='Search Name' />
            <Image  className='w-7 rotate-[265deg] cursor-pointer hover:scale-125 duration-700 hover:duration-300 ' src={assests.search} alt='search Icon'/>
        </div>

    </div>
  )
}
