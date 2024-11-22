'use client'

import React, { useEffect, useState, useMemo } from "react";
import { assests } from "../../../../assets/assets";
import Image from "next/image";
import { toast } from "sonner";
import { ProductItem } from "@/components/ProductItem";

export default function detail_product({ params }) {
    const unwrappedParams = React.use(params);
    const { id } = unwrappedParams;
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState(null); // Product With ID params 
    const [dataList, setDataList] = useState(null); // Products 
    const [relateProduct,setRelateProduct] = useState(null);

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/getproduct_id/${id}`);
        if (res.ok) {
            const data = await res.json();
            setProduct(data.product[0]);
            toast.success("Wonderful");
            console.log(`Get product ID ${id} success !!`);
            console.log(data);
            


        } else {
            console.log("Cannot Get Product from Database");
        }
    }

    const fetachALLProduct = async () => {
        const res = await fetch(`http://localhost:3000/api/getproduct`);

        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setDataList(data.products)
        }
    }

    // Fetch api get product/id and all product 
    useEffect(() => {
        fetchData();
        fetachALLProduct();
    }, [])


    // RelateProduct Filter 
    useEffect(() => {   
        if (dataList && product) {
            let  relateProductC = dataList.slice();
            relateProductC = relateProductC.filter((item) => item.Category == product.Category);
            setRelateProduct(relateProductC);
        }
        
        
    }, [dataList, setDataList,product,setProduct])

    // Covert Image to base64
    useEffect(() => {
        if (product && product.Picture) {
            const base64Image = Buffer.from(product.Picture).toString('base64');
            setImage(`data:image/jpeg;base64,${base64Image}`);
        }
    }, [product, setProduct])




    return (!product ? (
        <div>
            Is Loading....
        </div>
    ) : (
        <div>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div>
                        <Image src={image} alt={`This is Image product id ${id}`} width={700} height={700} />
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
                            <input id="quantity" type="number" defaultValue={1} className="mt-1 block w-16 rounded-md border-gray-900 shadow-sm" />
                        </div>
                        <button className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 flex items-center justify-center">
                            <Image src={assests.money_bag} className="w-7 h-7 coin" alt="Coin Image" />
                            <span className="mr-2" /> Buy
                        </button>
                        {/* Details Messge */}
                        <div className="mt-6">
                            <h2 className="text-3xl font-semibold">Detail</h2>
                                <p className="text-xl">
                                Product ID: {product.P_ID} <br></br>
                                Stock: {product.Stock} <br></br>
                                Brand: {product.Brand}
                                </p>
                            <p className="mt-2 text-gray-700">
                                {product.Detail}
                            </p>
                            
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800">Related products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {relateProduct?.map((product, index) => (
                            <ProductItem product={product} key={index} />
                        ))}
                    </div>
                </section>
            </div>

        </div>
    ));
}