'use client'

import React, { createContext } from 'react'
import { useState } from 'react';

import { products } from '../../assets/assets';
import { assests } from '../../assets/assets';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const minPrice = 0; 
    const maxPrice = 20000;
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [imagefile,setImagefile] = useState(null);
    const [imageProfile,setImageProfile] = useState(null);
    const [category,setCategory]= useState('All');
    const [brand,setBrand] = useState('');
    const [check, setCheck] = useState(false);

    const handleMinPriceInput = (e) => {
        const value = Number(e.target.value);
        if (value >= minPrice && value <= priceRange[1]) {
            setPriceRange([value, priceRange[1]]);
        }
    };

    const handleMaxPriceInput = (e) => {
        const value = Number(e.target.value);
        if (value <= maxPrice && value >= priceRange[0]) {
            setPriceRange([priceRange[0], value]);
        }
    };



    const value = {
        search, setSearch, products,priceRange,setPriceRange,handleMinPriceInput,handleMaxPriceInput,minPrice,maxPrice
        ,imagefile,setImagefile,imageProfile,setImageProfile,category,setCategory,brand,setBrand,check,setCheck
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
