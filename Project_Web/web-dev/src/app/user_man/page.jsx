'use client';

import React, { useContext, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { SearchBar_Man } from '@/components/SearchBar_Man';
import { ShopContext } from '@/context/ShopContext';
import BackButton from '@/components/backbutton';
import UserList from '@/components/UserList';
import Cookies from 'js-cookie';
import MeowWarning from '@/components/MeowWarning';


export default function user_man() {
  const { search,token,setToken } = useContext(ShopContext);
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    console.log(dataList)
  }, [dataList, setDataList]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/getuser`);

      if (res.ok) {
        const data = await res.json();
        setDataList(data.user);
      }
    };

    fetchData();
  }, []);

  const filterUser = useMemo(() => {
    if (!search) return dataList;
    return dataList.filter((user) =>
      user.User_Name.toLowerCase().includes(search.toLowerCase()) ||
      user.Email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, dataList]);

  const images = useMemo(() => {
    return filterUser.map((user) => {
      const base64Image = Buffer.from(user.profile_image).toString('base64');
      return `data:image/jpeg;base64,${base64Image}`;
    });
  }, [filterUser]);


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
        <div className="font-bold text-7xl">User/Account Management</div>
      </div>

      <div className="flex justify-between ml-56 pl-4">
        <SearchBar_Man />
        <Link href={'/Add_EditAccount'}>
          <button className="font-semibold bg-yellow-500 text-black px-8 py-3 hover:bg-yellow-600 mr-60 rounded-2xl whitespace-nowrap">Add User</button>
        </Link>
      </div>

      <div className="table-auto mt-8 ml-20 mr-20">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-[3%]">ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-1/12">Name</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-2/12 ">Address</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-1/12">Email</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-1/12">Tel</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-left w-1/12">Brith-Date</th>
              <th className="px-4 py-2 text-gray-700 font-medium text-center w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterUser.length > 0 ? (
              filterUser.map((user, index) => (
                <UserList
                  key={user.User_ID}
                  id={user.User_ID}
                  name={user.User_Name}
                  Address={user.Addrss}
                  Email={user.Email}
                  Tel={user.Tel}
                  bd={user.Brith_Date}
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
  ));
}

