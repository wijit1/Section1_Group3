'use client'

import React, { createContext } from 'react'
import { useState  } from 'react';

import { products } from '@/assets/assets';

export const ShopContext = createContext();

export const ShopContextProvider = (props)=>{
    const [search,setSearch] = useState('');


    const value = {
        search,setSearch,products
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
