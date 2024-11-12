
'use client';

import React, { useContext, useState } from 'react';
import { assests } from "../../../assets/assets";
import Image from "next/image";
import { SearchBar_Man } from '@/components/SearchBar_Man';
import { ShopContext } from '@/context/ShopContext';
import Link from 'next/link';
import BackButton from '@/components/backbutton';
export default function User_Man() {
  const { search } = useContext(ShopContext);

  // ข้อมูลตัวอย่างของสินค้า
  const products = [
    { id: '001', name: 'Wijit Nildee', address: '1150 Iceland', email: 'kawkawza20@gmail.com', tel: '082-721-XXXX', brithdate: '2002-04-28' },
    { id: '002', name: 'Sorakit Wongkunta', address: '1112 Hotland', email: 'htoo24653@gmail.com', tel: '081-445-XXXX', brithdate: '2004-01-05' },
    { id: '003', name: 'Sirawich Eamsaard', address: '191 England', email: 'atom.2446@gmail.com', tel: '092-248-XXXX', brithdate: '2003-05-15' },
    { id: '004', name: 'Yanaphat Jumpaburee', address: '1150 Japan', email: 'yanaphatjum@gmail.com', tel: '081-629-XXXX', brithdate: '2004-04-09'}

  ];

  // ฟิลเตอร์สินค้าโดยอิงจาก search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-items-end items-center m-5 pl-60">
      <BackButton />
        <div className="font-bold text-7xl">
          User Account Management
        </div>
      </div>

      {/* ใช้ SearchBar ตรงนี้ */}
      <div className="flex justify-between ml-56 pl-4">
        <SearchBar_Man/>
        <Link href={'/Add_EditAccount'}>
        <button className="font-semibold bg-yellow-500 text-black px-8 py-3 hover:bg-yellow-600 mr-60 rounded-2xl whitespace-nowrap">Add User</button>
        </Link>
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
