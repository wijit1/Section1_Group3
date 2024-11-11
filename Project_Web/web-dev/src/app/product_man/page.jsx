
'use client';

import React, { useContext, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { SearchBar_Man } from '@/components/SearchBar_Man';
import { ShopContext } from '@/context/ShopContext';
import ProductList from '@/components/ProductList';

export default function ProductMan() {
  const { search} = useContext(ShopContext);
  const [dataList, setDataList] = useState([]);

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


  const filterProducts = useMemo(() => {
    if (!search) return dataList;
    return dataList.filter((product) =>
      product.P_Name.toLowerCase().includes(search.toLowerCase()) ||
      product.Detail.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, dataList]);

  // ประมวลผลรูปภาพโดยการสร้าง base64 images เฉพาะรายการที่กรองแล้ว
  const images = useMemo(() => {
    return filterProducts.map((product) => {
      const base64Image = Buffer.from(product.Picture).toString('base64');
      return `data:image/jpeg;base64,${base64Image}`;
    });
  }, [filterProducts]);


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
        <SearchBar_Man />
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

            {filterProducts.length > 0 ? (
              <div>
                {filterProducts.map((product, index) => (
                  <ProductList
                    key={product.P_ID}
                    id={product.P_ID}
                    name={product.P_Name}
                    detail={product.Detail}
                    stock={product.Stock}
                    brand={product.Brand}
                    price={product.Price}
                    image={images[index]}
                  />
                ))}
              </div>
            ) : (
              <div className='text-4xl flex justify-center items-center p-10'>
                Not found
              </div>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}
