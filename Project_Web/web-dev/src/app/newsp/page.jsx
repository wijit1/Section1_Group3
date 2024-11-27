'use client'

import React, { useEffect, useState } from 'react'

export default function NewsPage() {
    const [datalist, setDataList] = useState(null);
    const fetchApi = async () => {
        const res = await fetch('http://localhost:3000/api/newsapi');

        if (res.ok) {
            const data = await res.json();
            console.log(data.articles);
            setDataList(data.articles)
        } else {
            console.log(res);
        }
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (datalist ? (
        <div className='flex flex-col justify-center items-center gap-20 '>
            <p className='text-4xl font-bold mt-10 border-4 border-black bg-yellow-400 p-4 rounded-3xl mr-[1400px]'>News</p>
            {datalist?.slice(0, 8).map((article, index) => (
                <div key={index} className='w-1/2 flex flex-col gap-3'>
                    {article.title != "[Removed]" ? (
                        <>
                            <h1 className='text-3xl font-bold'>{article.title}</h1>
                            <img src={article.urlToImage} alt="Image news" />
                            <a href={article.url} className=' hover:text-blue-500 hover:underline text-xl text-red-500'>Link Click here</a>
                        </>
                    ) : (
                        null
                    )}
                </div>
            ))}
        </div>
    ) : (
        <div className="flex justify-center mt-56 m-auto">
            <h1 className=" text-3xl font-bold border-4  bg-green-300  border-black rounded-full p-4">Is Loading....</h1>
        </div>
    )

    )
}
