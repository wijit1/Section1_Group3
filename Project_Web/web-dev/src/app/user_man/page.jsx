
'use client';

import React, { useContext, useState } from 'react';
import { assests } from "../../../assets/assets";
import Image from "next/image";
import { SearchBar_Man } from '@/components/SearchBar_Man';
import { ShopContext } from '@/context/ShopContext';
export default function User_Man() {
  const { search } = useContext(ShopContext);

  // ข้อมูลตัวอย่างของสินค้า
  const products = [
    { id: '001', name: 'Wijit Nildee', address: '1150 Iceland', email: 'wijit.nil@student.mahidol.ac.th', tel: '082-721-7440', brithdate: '2002-04-28' },
    { id: '002', name: 'Luffu', address: '1150 Iceland', email: 'wijit.nil@student.mahidol.ac.th', tel: '082-721-7440', brithdate: '2002-04-28' },
    { id: '003', name: 'Sonju', address: '1150 Iceland', email: 'wijit.nil@student.mahidol.ac.th', tel: '082-721-7440', brithdate: '2002-04-28' }

  ];

  // ฟิลเตอร์สินค้าโดยอิงจาก search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-items-end items-center m-5 pl-60">
        <div className="flex items-center m-5 border border-red-950 w-24 h-14 bg-green-400 rounded-3xl ">
          <div href="#515515151" className="text-black hover:text-green-800 font-semibold text-lg py-2 px-4 rounded ">←Back</div>
        </div>
        <div className="font-bold text-7xl">
          User Account Management
        </div>
      </div>

      {/* ใช้ SearchBar ตรงนี้ */}
      <div className="flex justify-between ml-56 pl-4">
        <SearchBar_Man/>
        <button className="font-semibold bg-yellow-500 text-black px-8 py-3 hover:bg-yellow-600 mr-60 rounded-2xl whitespace-nowrap">Add User</button>
      </div>

      {/* ตารางสินค้า */}
      <div className="overflow-x-auto mt-8 mr-60 ml-60">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Name</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Address</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Email</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Tel</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Brith-Date</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-3 text-gray-600">{product.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 rounded" />
                    <span className="ml-4 text-gray-700">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{product.address}</td>
                <td className="px-4 py-3 text-gray-600 ">{product.email}</td>
                <td className="px-4 py-3 text-gray-600">{product.tel}</td>
                <td className="px-4 py-3 text-gray-600 flex mt-5 ">{product.brithdate}
                </td> 
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="p-2 text-red-500 hover:text-red-700">
                      <Image src={assests.trash} alt="ลบ" className="w-5 h-5 ml-3" />Delete
                    </button>
                    <button className="p-2 text-blue-500 hover:text-blue-700">
                      <Image src={assests.setting} alt="แก้ไข" className="w-5 h-5 ml-2" />Edits
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
