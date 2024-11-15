'use client'

import React, { useEffect, useState,useMemo } from "react";
import { assests } from "../../../../assets/assets";
import Image from "next/image";
import { toast } from "sonner";

export default function detail_product({ params }) {
    const unwrappedParams =  React.use(params);
    const {id} = unwrappedParams;
    const [product,setProduct] = useState(null);
    const [image,setImage] = useState(null);

    const fetchData = async ()=>{
        const res = await fetch(`/api/getproduct_id/${id}`);
        if (res.ok) {
            const data = await res.json();
            setProduct(data.product[0]);
            toast.success("Wonderful");
            console.log(`Get product ID ${id} success !!`);
            
        }else{
            console.log("Cannot Get Product from Database");
        }
    }

    useEffect(()=>{
        fetchData();
    },[id])


    useEffect(()=>{
        if (product && product.Picture) {
            const base64Image = Buffer.from(product.Picture).toString('base64');
            setImage(`data:image/jpeg;base64,${base64Image}`);
        }

        
    },[product,setProduct])




    useEffect(()=>{
        console.log(product);
        
    },[product,setProduct])

    return (!product?(
        <div>
            Is Loading....
        </div>
    ):(
        <div>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div>
                        <Image src={image} alt={`This is Image product id ${id}`} width={200} height={200}/>
                    </div>
                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">{product.P_Name}</h1>
                        <div className="text-x1 font-semibold text-gray-800 mt-4">Price</div>
                        <div className="text-xl font-semibold text-yellow-600 flex items-center space-x-2">
                            <Image src={assests.dollar} className="w-5 h-5 coin" alt="Coin Image" />
                            <span>{product.Price}</span>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="quantity" className="block font-medium text-gray-700">Quantity</label>
                            <input id="quantity" type="number" defaultValue={1} className="mt-1 block w-16 rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <button className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 flex items-center justify-center">
                            <Image src={assests.money_bag} className="w-7 h-7 coin" alt="Coin Image" />
                            <span className="mr-2" /> Buy
                        </button>
                        {/* Details Messge */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold">Detail</h2>
                            <p className="mt-2 text-gray-700">
                                *Bonus Monkey Luffy<br />
                                *2 color (White pants / Orange pants)
                            </p>
                            <p className="mt-4 text-gray-700">
                                Material: Resin / PU<br />
                                Product size: POPmax scale<br />
                                Limited production amount: TBD<br />
                                Product arrival: Q2 2023
                            </p>
                        </div>
                    </div>
                </div>
                {/* Related Products */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800">Related products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img className="w-full rounded-lg" src="luffy-gear5-run.jpg" alt="Luffy Gear 5 Run" />
                            <h3 className="text-xl font-semibold mt-2">Luffy Gear 5 Run</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img className="w-full rounded-lg" src="luffy-gear5-god.jpg" alt="Luffy Gear 5 God" />
                            <h3 className="text-xl font-semibold mt-2">Luffy Gear 5 God</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img className="w-full rounded-lg" src="luffy-giant-human.jpg" alt="Luffy Giant Human" />
                            <h3 className="text-xl font-semibold mt-2">Luffy Giant Human</h3>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    ));
}