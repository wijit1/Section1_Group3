
'use client'
import React, { useEffect, useState,useContext } from "react";
import { assests } from "../../../../assets/assets";
import Image from "next/image";
import { toast } from "sonner";
import { ShopContext } from "@/context/ShopContext";
import BackButton from "@/components/backbutton";
import UploadImage from "@/components/UploadImage";


export default function Edit_Product({ params }) {
    const unwrappedParams =  React.use(params);
    const {id} = unwrappedParams;

    const [name,setName] = useState('');
    const [detail,setDetail] = useState('');
    const [price,setPrice] = useState('');
    const [stock,setStock] = useState('');
    const [brand,setBrand] = useState('');
    const [category,setCategory] = useState('All');
    const [product,setProduct] = useState(null);
    const { imagefile ,setImagefile } = useContext(ShopContext); 

    
    const fetchData = async ()=>{
        const res = await fetch(`http://localhost:3000/api/getproduct_id/${id}`);
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
        if(product){
            setName(product.P_Name);
            setDetail(product.Detail);
            setPrice(product.Price);
            setStock(product.Stock);
            setBrand(product.Brand);
            setCategory(product.Category);

        }
    },[product,setProduct])


    const handleUpdate = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('detail',detail);
        formData.append('price',price);
        formData.append('stock',stock);
        formData.append('brand',brand);
        formData.append('category',category);
        formData.append('image',imagefile);
        try {
            const response = await fetch(`http://localhost:3000/api/submit-pform/${id}`,{
                method: 'PUT',
                body:formData
            });
            if (response.ok){
                toast.success('Update Product successfully')
                const data = await response.json()
                console.log(data);

            }else {
                console.log('Error submitting form');
            }
        }catch(error){
            console.log(error)
            
        }
        setName('');
        setDetail('');
        setPrice('');
        setStock('');
        setBrand('');
        setCategory('');
        setImagefile(null);

    }

    

    return (product?(
        <div className="flex flex-col m-auto p-10 mt-10 items-center">
            {/* Title */}
            <div className="flex items-center m-5 gap-7">  <BackButton/>

                <div className="flex  justify-between w-auto border-4 gap-5 border-black p-3 rounded-xl">
                    
                    <Image className="hover:rotate-90 hover:duration-700 duration-500 " src={assests.setting} width={50} height={50}/>
                    <h1 className="text-5xl text-rose-400"> ADD & Edit Product</h1>
                </div>
                </div>
            <form className="mt-10 w-3/4 flex flex-col justify-center" onSubmit={handleUpdate}>
                <div className="flex justify-between gap-20 w-full">
                    {/* Description */}
                    <div className="flex flex-col gap-3 w-1/2">
                        <div className="flex items-center justify-start">
                            <h1 className="text-3xl">Description</h1>
                        </div>
                        <div className="flex flex-col p-5 border-4 gap-10 border-gray-400 rounded-xl w-full">
                            {/* Product Name Input */}
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400">Product Name</p>
                                <input className="bg-gray-200 border-2 rounded-xl p-3" type="text" name="p_name" value={name} onChange={(e)=>setName(e.target.value)} required />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400">Product Detail</p>
                                <textarea className="bg-gray-200 border-2 rounded-xl p-3 h-72" name="p_detail" value={detail} onChange={(e)=>setDetail(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-3 w-1/2">
                        {/* Product Image */}
                        
                        <UploadImage/>

                        {/* Product Price and Stock */}
                        <div className="w-3/4 mt-4">
                            <div className="flex items-center justify-start">
                                <h1 className="text-3xl">Price & Stock</h1>
                            </div>
                            <div className="flex p-5 mt-5 justify-between border-4 gap-10 border-gray-400 rounded-xl w-full">
                                <div className="flex flex-col gap-3">
                                    <p className="text-gray-400">Product Price</p>
                                    <input value={price} className="border-2 p-2 border-gray-800 rounded-xl" onChange={(e)=>setPrice(e.target.value)} type="text" name="price" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-gray-400">Stock</p>
                                    <input value={stock} className="border-2 p-2 border-gray-800 rounded-xl w-11/12" onChange={(e)=>setStock(e.target.value)} type="text" name="stock" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full mt-10">
                    {/* Category and Branding */}
                    <div className="flex flex-col gap-3 w-1/2 mt-2">
                        <div className="flex items-center justify-start">
                            <h1 className="text-3xl">Category</h1>
                        </div>
                        <div className="flex flex-col px-10 py-5 border-4 h-36 gap-10 w-1/2 border-gray-400 rounded-xl">
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400">Category</p>
                                <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full px-5 py-2" name="category">
                                    <option value="All">All</option>
                                    <option value="Super Sale 2024">Super Sale 2024</option>
                                    <option value="New Release">New Release</option>
                                    <option value="Premium Super Exclusive">Premium Super Exclusive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 w-1/3">
                        <div className="flex items-center justify-start">
                            <h1 className="text-3xl">Product Branding</h1>
                        </div>
                        <div className="flex flex-col p-5 border-4 gap-10 border-gray-400 rounded-xl w-3/4">
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400">Brand Name</p>
                                <input value={brand} className="bg-gray-200 border-2 rounded-xl p-3" onChange={(e)=>setBrand(e.target.value)} type="text" name="brand_name" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end items-end gap-14 ml-[1000px] mt-24">
                    <button onClick={handleUpdate} className="bg-red-300 px-5 py-2 rounded-xl w-32" type="submit">Update</button>
                    <button className="bg-blue-300 px-5 py-2 rounded-xl w-32" type="reset">Cancel</button>
                </div>
            </form>
        </div>
    ):(
        <div>
            Loading ....
        </div>
    ))
}