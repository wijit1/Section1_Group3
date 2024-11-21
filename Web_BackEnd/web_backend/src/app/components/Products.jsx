'use client'
import React, { useState,useEffect } from 'react'

export default function Products() {

    const [dataList,setDataList] = useState(null);
    
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

    useEffect(()=>{
        console.log(dataList);
    },[dataList,setDataList])

  return (
    <div>
        
    </div>
  )
}
