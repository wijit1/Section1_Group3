'use client'

import React, { createContext } from 'react'
import { useState  } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = (props)=>{
    const [search,setSearch] = useState('');


    const value = {
        search,setSearch
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
