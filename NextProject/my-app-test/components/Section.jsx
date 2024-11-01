'use client'

import { assests } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProductItem } from './ProductItem'
export const Section = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log(count);
    },[count])


    return (
        <div>
            <section className="flex flex-col  justify-center mt-10">
                <div className="flex flex-col items-start justify-items-start px-32 ">
                    <p className="text-5xl text-yellow-400 font-bold "> Super Sale </p>
                    {/* Super Sale Product */}
                    <div className="flex gap-20 mt-7 mb-7">
                        <button onClick={()=>setCount(count+1)}><Image className="w-[40px] h-auto rotate-180" src={assests.arrow} width={40} height={40}/></button>
                        {/* For each product */}
                        {/* <ProductItem/> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
