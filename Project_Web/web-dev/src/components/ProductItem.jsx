import React from 'react'
import Image from 'next/image'
import { assests } from '../../assets/assets'

export const ProductItem = ({product}) => {
    return (

        <div className="flex flex-col gap-2 px-7 py-8 border-4 border-gray-800 rounded-xl bg-gray-100">
            <div className="w-[248px] h-[248px] bg-red-800">
                <Image className='w-full h-full'  src={product.Picture[0]} />
            </div>
            <div className="text-2xl font-bold ">
                <p className="font-sans">{product.Name} </p>
            </div>
            <div className="flex justify-between items-center ">
                {/* Icon coin  */}
                <Image src={assests.coin} width={40} height={40} />
                <p className="text-3xl font-mono">{product.Price}$</p>
            </div>
        </div>

    )
}