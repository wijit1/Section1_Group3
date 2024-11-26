'use client'
import React, { useContext, useEffect,useState } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '@/context/ShopContext';
import { assests } from '../../assets/assets';
import Image from 'next/image';

export const Collection = () => {
    const { search, setSearch,priceRange,setPriceRange,category,setCategory,brand } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [dataList,setDataList] = useState([]);

    
    const applyFilter = () => {
        let productsCopy = dataList.slice();
        if(search){
            productsCopy = productsCopy.filter(item => item.P_Name.toLowerCase().includes(search.toLowerCase()))
        }

        if(category != "All"){
            productsCopy = productsCopy.filter((item)=>item.Category == category)
        }

        if(brand){
            productsCopy = productsCopy.filter((item)=> item.Brand.toLowerCase().includes(brand.toLowerCase()))
        }

        
        productsCopy = productsCopy.filter((item)=> item.Price >= priceRange[0] && item.Price <= priceRange[1])
        


        setFilterProducts(productsCopy);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/getproduct`);
    
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                
                setDataList(data.products)
            }
        }
    
        fetchData();
    }, [] )


    useEffect(() => {
        applyFilter(); 
    }, [dataList,setDataList])
    
    



    return  filterProducts.length > 0 ?(
        <div className='flex  justify-start  w-full border-4  border-gray-400 rounded-xl p-10 pt-16 flex-wrap gap-6 relative'>
            <button onClick={applyFilter} className='flex gap-4 absolute p-3 right-6 top-2 border-4  border-black rounded-full bg-yellow-300 hover:bg-yellow-100 hover:duration-300 duration-300 '> 
                <p className='text-xl'>Click search </p> 
                <Image  className='w-7 rotate-[265deg] cursor-pointer hover:scale-125 duration-700 hover:duration-300 ' alt='Search bar Icon' src={assests.search}/>
            </button>

            {filterProducts?.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))} 
        </div>
    ): (<div className='flex text-5xl justify-center items-center  w-full border-8 border-gray-400 rounded-xl p-10 flex-wrap gap-[50px] relative'>
            <button onClick={applyFilter} className='flex gap-4 absolute p-3 right-6 top-2 border-4  border-black rounded-full bg-yellow-300 hover:bg-yellow-100 hover:duration-300 duration-300 '> 
                <p className='text-xl'>Click search </p> 
                <Image  className='w-7 rotate-[265deg] cursor-pointer hover:scale-125 duration-700 hover:duration-300 ' alt='Search bar Icon' src={assests.search}/>
            </button>
                Not found 
        </div>)
}
