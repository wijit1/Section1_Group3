'use client'
import React, { useContext, useEffect,useState } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '@/context/ShopContext';


export const Collection = () => {
    const { search, setSearch,priceRange,setPriceRange} = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [dataList,setDataList] = useState([]);


    const applyFilter = () => {
        let productsCopy = dataList.slice();
        if(search){
            productsCopy = productsCopy.filter(item => item.P_Name.toLowerCase().includes(search.toLowerCase()))
        }

        productsCopy = productsCopy.filter((item)=> item.Price >= priceRange[0] && item.Price <= priceRange[1])

        setFilterProducts(productsCopy);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/getproduct`);
    
            if (res.ok) {
                const data = await res.json();
                setDataList(data.products)
            }
        }
    
        fetchData();
    }, [] )


    useEffect(() => {
        applyFilter();
        console.log(filterProducts);

    }, [search, setSearch ,priceRange,setPriceRange,dataList,setDataList])
    


    return  filterProducts.length > 0 ?(
        <div className='flex  justify-start  w-full border-4  border-gray-400 rounded-xl p-10 flex-wrap gap-8'>
            {filterProducts?.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))} 
        </div>
    ): (<div className='flex text-5xl justify-center items-center  w-full border-8 border-gray-400 rounded-xl p-10 flex-wrap gap-[50px]'>
                Not found 
        </div>)
}
