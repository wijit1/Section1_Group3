'use client'

import { assests } from '../../assets/assets'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProductItem } from './ProductItem'

export const Section = () => {
    const [count, setCount] = useState(0);
    const [dataList, setDataList] = useState([]);
    const [supersaleProduct, setsupersaleProduct] = useState(null);
    const [newProduct,setNewProduct] = useState(null);
    const [exclusiveProduct,setExclusiveProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/getproduct`);

            if (res.ok) {
                const data = await res.json();
                setDataList(data.products)
            }
        }

        fetchData();
    }, [])


    const applyFilter = () => {
        let supersale = dataList.slice();
        let newproduct = dataList.slice();
        let exclusive = dataList.slice();

        supersale = supersale.filter((item) => item.Category === "Super Sale 2024" )
        newproduct = newproduct.filter((item) => item.Category === "New Release" )
        exclusive = exclusive.filter((item) => item.Category === "Premium Super Exclusive" )
        setsupersaleProduct(supersale);
        setNewProduct(newproduct);
        setExclusiveProduct(exclusive);
    }

    useEffect(()=>{
        if(dataList){
            console.log(dataList);
            applyFilter();
        }
    },[dataList,setDataList])


    return (
        <div>
            <section className="flex flex-col gap-32  justify-center mt-10 border-2 border-green-600 ">
                {/* Super Sale Section */}
                <div className="flex flex-col items-start justify-items-start px-32 ">
                    <p className="text-5xl text-yellow-400 font-bold border-8 border-yellow-500 p-3 rounded-2xl bg-zinc-800 "> Super Sale </p>

                    <div className="flex gap-10 mt-7 mb-7 w-full ">
                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-auto rotate-180 " src={assests.arrow} width={40} height={40} /></button>
                
                        {supersaleProduct ? (
                            <div className='flex flex-wrap justify-center gap-12 w-full'>
                                {supersaleProduct.slice(0,4).map((product,index)=>(
                                    <ProductItem product={product} key={index}/>
                                ))}
                            </div>
                        ) : null}

                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-[full] " src={assests.arrow} /></button>
                    </div>
                </div>


                {/* New Release Section */}

                <div className="flex flex-col items-start justify-items-start px-32 ">
                    <p className="text-5xl text-yellow-400 font-bold border-8 border-yellow-500 p-3 rounded-2xl bg-zinc-800 "> New Release </p>

                    <div className="flex gap-10 mt-7 mb-7 justify-between items-center  w-full ">
                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-auto rotate-180 " src={assests.arrow} width={40} height={40} /></button>
                
                        {newProduct ? (
                            <div className='flex flex-wrap justify-center gap-12 w-full'>
                                {newProduct.slice(0,4).map((product,index)=>(
                                    <ProductItem product={product} key={index}/>
                                ))}
                            </div>
                        ) : null}

                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-[full] " src={assests.arrow} /></button>
                    </div>
                </div>


                {/* Super Exclusive Section */}

                <div className="flex flex-col items-start justify-items-start px-32 ">
                    <p className="text-5xl text-yellow-400 font-bold border-8 border-yellow-500 p-3 rounded-2xl bg-zinc-800 "> Super Exclusive </p>

                    <div className="flex gap-10 mt-7 mb-7 justify-between items-center  w-full ">
                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-auto rotate-180 " src={assests.arrow} width={40} height={40} /></button>
                
                        {exclusiveProduct ? (
                            <div className='flex flex-wrap justify-center gap-12 w-full'>
                                {exclusiveProduct.slice(0,4).map((product,index)=>(
                                    <ProductItem product={product} key={index}/>
                                ))}
                            </div>
                        ) : null}

                        <button onClick={() => setCount(count + 1)}><Image className="w-[40px] h-[full] " src={assests.arrow} /></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
