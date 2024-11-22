
import React, { useMemo } from 'react'
import Image from 'next/image'
import { assests } from '../../assets/assets'
import Link from 'next/link'

export const ProductItem = ({product}) => {
    
    const image = useMemo(() => {
        if (product.Picture) {
            const base64Image = Buffer.from(product.Picture).toString('base64');
            return `data:image/jpeg;base64,${base64Image}`;
        }
        return;
    }, [product.Picture]);

    return (
        <Link href={`/detail_product/${product.P_ID}`} className="flex flex-col cursor-pointer w-[20rem] justify-between gap-2 px-7 py-8 border-4 overflow-hidden border-gray-800 rounded-xl bg-white hover:text-red-400 hover:underline mt-3">
            <div className="w-[255px] h-[255px]">

                {image?(
                    <img className='w-full h-full object-cover ' src={image} alt={`This is Image product: ${product.P_Name}`} />
                ):(
                    <Image className='w-full h-full' src={assests.meow}  alt="Image is not found" width={100} height={100} />
                )}
            </div>

            <div className="text-2xl font-bold overflow-hidden">
                <p className="font-sans">{product.P_Name}</p>
                <div className='mt-3 '>
                <p className='font-sans text-neutral-500'>Brand: {product.Brand} </p>
                </div> 
            </div>

            <div className="flex  items-center">
                {/* Icon Coin */}
                <Image src={assests.coin} width={40} height={40} alt="coin" class ="w-7 h-7" />
                <p className="text-3xl font-mono ml-2">{product.Price}</p>
            </div>
        </Link>
    )
}