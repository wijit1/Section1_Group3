'use client';

import React, { useContext, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { SearchBar_Man } from '@/components/SearchBar_Man';
import { ShopContext } from '@/context/ShopContext';
import ProductList from '@/components/ProductList';
import BackButton from '@/components/backbutton';
import Cookies from 'js-cookie';
import MeowWarning from '@/components/MeowWarning';


export default function ProductMan() {
  const { token, setToken,search } = useContext(ShopContext);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/getproduct`);

      if (res.ok) {
        const data = await res.json();
        setDataList(data.products);
      }else{
        console.log("Cannot Get Product from Database");
        
      }
    };

    fetchData();
  }, []);

  const filterProducts = useMemo(() => {
    if (!search) return dataList;
    return dataList.filter((product) =>
      product.P_Name.toLowerCase().includes(search.toLowerCase()) ||
      product.Detail.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, dataList]);

  const images = useMemo(() => {
    return filterProducts.map((product) => {
      const base64Image = Buffer.from(product.Picture).toString('base64');
      return `data:image/jpeg;base64,${base64Image}`;
    });
  }, [filterProducts]);

  
  useEffect(()=>{
    const tokenFromCookie =  Cookies.get('token');
    setToken(tokenFromCookie);
  },[])

  return (token?
    <div>
      <div className="flex justify-items-end items-center m-5 pl-60">

        <div className="flex items-center m-5">
          <BackButton />
        </div>
        <div className="font-bold text-7xl">Product/Service Management</div>
      </div>

      <div className="flex justify-between ml-56 pl-4">
        <SearchBar_Man />
        <Link href={'/edit_product'}>
          <button className="font-semibold bg-yellow-500 text-black px-8 py-3 hover:bg-yellow-600 mr-60 rounded-2xl whitespace-nowrap  text-2xl">Add Product</button>
        </Link>
      </div>

      <div className="table-auto mt-8 ml-20 mr-20">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[3%]  text-2xl ">ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[12%] text-2xl">Product</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[15%]  text-2xl">Detail</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[5%]  text-2xl">Stock</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[5%]  text-2xl">Brand</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[5%] text-2xl">Price</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-center w-[7%]  text-2xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterProducts.length > 0 ? (
              filterProducts.map((product, index) => (
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
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-4xl text-center p-10">Not found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  :(
    <MeowWarning/>
  ))
}

