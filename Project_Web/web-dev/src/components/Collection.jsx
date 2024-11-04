'use client'
import React, { useContext, useEffect,useState } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '@/context/ShopContext';


export const Collection = () => {
    const { products, search, setSearch } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);

    const applyFilter = () => {
        let productsCopy = products.slice();
        if(search){
            productsCopy = productsCopy.filter(item => item.Name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilterProducts(productsCopy);
    }

    useEffect(() => {
        applyFilter();
        console.log(search);

    }, [search, setSearch])
    
    return  filterProducts.length > 0 ?(
        <div className='flex  w-full border-4  border-gray-400 rounded-xl p-10 flex-wrap gap-[50px]'>
            {filterProducts?.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))} 
        </div>
    ): (<div className='flex text-5xl justify-center items-center  w-full border-8 border-gray-400 rounded-xl p-10 flex-wrap gap-[50px]'>
                Not found 
        </div>)
}
