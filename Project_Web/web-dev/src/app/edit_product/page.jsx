
'use client'
import { useEffect, useState,useContext } from "react";
import { assests } from "../../../assets/assets";
import Image from "next/image";
import { toast } from "sonner";
import UploadImage from "@/components/UploadImage";
import { ShopContext } from "@/context/ShopContext";
import BackButton from "@/components/backbutton";

export default function Edit_Product() {
    const [name,setName] = useState('');
    const [detail,setDetail] = useState('');
    const [price,setPrice] = useState('');
    const [stock,setStock] = useState('');
    const [brand,setBrand] = useState('');
    const [category,setCategory] = useState('all');

    const { imagefile ,setImagefile } = useContext(ShopContext); 


    const handleSubmit = async (e) =>{
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
            const response = await fetch('/api/submit-pform',{
                method: 'POST',
                body:formData
            });
            if (response.ok){
                toast.success('Form submitted successfully')
                console.log("Form submitted successfully");

            }else {
                console.log('Error submitting form');
            }
        }catch(error){
            console.error("Error: ",error);
            
        }
        setName('');
        setDetail('');
        setPrice('');
        setStock('');
        setBrand('');
        setCategory('');
        setImagefile(null);

    }

    useEffect(()=>{
        console.log(imagefile);
        
    },[imagefile,setImagefile])

    return (
        <div className="flex flex-col m-auto p-10 mt-10 items-center">
            {/* Title */}

                <div className="flex  justify-between w-auto border-4 gap-5 border-black p-3 rounded-xl">
                    
                    <Image className="hover:rotate-90 hover:duration-700 duration-500 " src={assests.setting} width={50} height={50}/>
                    <h1 className="text-5xl text-rose-400"> ADD & Edit Product</h1>
                </div>

            <form className="mt-10 w-3/4 flex flex-col justify-center" onSubmit={handleSubmit}>
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
                                    <option value="all">a</option>
                                    <option value="b">b</option>
                                    <option value="c">c</option>
                                    <option value="d">d</option>
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
                    <button className="bg-red-300 px-5 py-2 rounded-xl w-32" type="submit">Add</button>
                    <button className="bg-blue-300 px-5 py-2 rounded-xl w-32" type="reset">Cancel</button>
                </div>
            </form>




        </div>
    );
}