'use client'
import React, { useContext, useEffect,useState } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '@/context/ShopContext';


export const Collection = () => {
    const { products, search, setSearch } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);

    const appyFilter = () => {
        let productsCopy = products.slice();
        if(search){
            productsCopy = productsCopy.filter(item => item.Name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilterProducts(productsCopy);
    }
    useEffect(() => {
        appyFilter();
        console.log(search);

    }, [search, setSearch])
    return (
        <div className='flex  w-full border border-red-700 rounded-xl p-10 flex-wrap gap-[50px]'>
            {filterProducts.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    )
}
