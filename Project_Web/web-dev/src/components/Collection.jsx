'use client'
import React, { useContext, useEffect,useState } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '@/context/ShopContext';


export const Collection = () => {
    const { search, setSearch,priceRange,setPriceRange} = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [dataList,setDataList] = useState([]);
    const {category,setCategory,brand} = useContext(ShopContext);

    
    const applyFilter = () => {
        let productsCopy = dataList.slice();
        if(search){
            productsCopy = productsCopy.filter(item => item.P_Name.toLowerCase().includes(search.toLowerCase()))
        }

        if(category != "All"){
            productsCopy = productsCopy.filter((item)=>item.Category == category)
        }

        // if(brand){
        //     productsCopy = productsCopy.filter((item)=> item.Brand == brand)
        // }

        
        productsCopy = productsCopy.filter((item)=> item.Price >= priceRange[0] && item.Price <= priceRange[1])



        setFilterProducts(productsCopy);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/getproduct`);
    
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
    }, [search, setSearch ,priceRange,setPriceRange,dataList,setDataList,category,])
    


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
