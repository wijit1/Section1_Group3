
'use client';

import React, { useContext, useEffect, useState } from 'react';
import { assests } from "../../../assets/assets";
import Link from 'next/link';
import Image from "next/image";
import { SearchBar_Man } from '@/components/SearchBar_Man';
import { ShopContext } from '@/context/ShopContext';
import ProductList from '@/components/ProductList';

export default function ProductMan() {
  const { search } = useContext(ShopContext);
  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch(`/api/`);
    }
  },[])

  // ข้อมูลตัวอย่างของสินค้า
  const products = [
    { id: '001', name: 'Bumper Car Luffy', detail: 'Release in 2025. Limited Edition for One Piece Anniversary', stock: 15, brand: 'Moon Studio', price: 3200 },
    { id: '002', name: 'Electric Scooter', detail: '2023 Model, Eco-friendly', stock: 8, brand: 'EcoMove', price: 4500 },
    { id: '003', name: 'Sports Watch', detail: 'Waterproof, GPS enabled', stock: 20, brand: 'TimeMax', price: 2000 },
  ];

  // ฟิลเตอร์สินค้าโดยอิงจาก search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.detail.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-items-end items-center m-5 pl-60">
        <div className="flex items-center m-5 border border-red-950 w-24 h-14 bg-green-400 rounded-3xl ">
          <div href="#515515151" className="text-black hover:text-green-800 font-semibold text-lg py-2 px-4 rounded ">←Back</div>
        </div>
        <div className="font-bold text-7xl">
          Product/Service Management
        </div>
      </div>

      {/* ใช้ SearchBar ตรงนี้ */}
      <div className="flex justify-between ml-56 pl-4">
        <SearchBar_Man/>
        <Link href={'/edit_product'}>
          <button className="font-semibold bg-yellow-500 text-black px-8 py-3 hover:bg-yellow-600 mr-60 rounded-2xl whitespace-nowrap">Add Product</button>
        </Link>
      </div>

      {/* ตารางสินค้า */}

      <div className="overflow-x-auto mt-8 mr-60 ml-60">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr className='flex gap-36'>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Product</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Detail</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Stock</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Brand</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Price</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <ProductList id={product.id} 
              name={product.name} 
              detail={product.detail} 
              price={product.price} 
              brand={product.brand}
              stock={product.stock}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
