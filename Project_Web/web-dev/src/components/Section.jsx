'use client'

import { assests } from '../../assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '@/context/ShopContext'
import search from '@/app/search/page'
export const Section = () => {
    const [count, setCount] = useState(0);
    const { products } = useContext(ShopContext);
    const [dataList, setDataList] = useState([]);
    const [supersalefilter, setsupersalefilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/getproduct`);

            if (res.ok) {
                const data = await res.json();
                setDataList(data.products)
            }
        }

        fetchData();
    }, [])


    const applyFilter = () => {
        let supersaleproduct = dataList.slice();

    }


    useEffect(() => {
        console.log("This is DataList ",dataList);
        
    }, [dataList, setDataList])


    return (
        <div>
            <section className="flex flex-col  justify-center mt-10 border-2 border-green-600 ">
                {/* Super Sale Section */}
                <div className="flex flex-col items-start justify-items-start px-32 ">
                    <p className="text-5xl text-yellow-400 font-bold border-8 border-yellow-500 p-3 rounded-2xl bg-zinc-800 "> Super Sale </p>

                    <div className="flex gap-10 mt-7 mb-7 justify-between items-center  w-full ">
                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-auto rotate-180 " src={assests.arrow} width={40} height={40} /></button>
                        {/* For each product */}
                        {/* {products.map((product, index) => (
                            <ProductItem product={product} key={index} />
                        ))} */}
                        {dataList ? (
                            <div className='flex flex-wrap justify-between gap-12 w-full'>
                                {dataList.slice(0,4).map((product,index)=>(
                                    <ProductItem product={product}/>
                                ))}
                            </div>
                        ) : null}

                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-[full] " src={assests.arrow} /></button>
                    </div>
                </div>


                {/* Hot product Section */}

            </section>
        </div>
    )
}
