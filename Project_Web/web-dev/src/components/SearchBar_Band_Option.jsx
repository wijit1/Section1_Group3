'use client';

import React, { useContext } from 'react';
import { assests } from '../../assets/assets';
import Image from 'next/image';
import { ShopContext } from '@/context/ShopContext';

export const SearchBar_Band_Option = () => {
    const { brand,setBrand} = useContext(ShopContext);

    return (
        <div className=' bg-yellow-50 text-center py-2'>
            <div className='flex items-center justify-center border border-gray-300 px-3 py-1 mx-auto my-3 rounded-full w-[80%] max-w-sm'>
                <input
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className='outline-none  bg-transparent'
                    type="text"
                    placeholder='Search'
                />

            </div>
        </div>
    );
};
