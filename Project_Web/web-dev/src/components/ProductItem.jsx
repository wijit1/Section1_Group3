
import React, { useMemo } from 'react'
import Image from 'next/image'
import { assests } from '../../assets/assets'


export const ProductItem = ({product}) => {
    
    const image = useMemo(() => {
        if (product.Picture) {
            const base64Image = Buffer.from(product.Picture).toString('base64');
            return `data:image/jpeg;base64,${base64Image}`;
        }
        return;
    }, [product.Picture]);

    return (
        <div className="flex flex-col cursor-pointer gap-2 px-7 py-8 border-4 border-gray-800 rounded-xl bg-gray-100 hover:text-red-400 hover:underline">
            <div className="w-[248px] h-[248px] bg-red-800">

                {image?(
                    <Image className='w-full h-full' src={image} alt={`This is Image product: ${product.P_Name}`} width={100} height={100} />
                ):(
                    <Image className='w-full h-full' src={assests.meow}  alt="Image is not found" width={100} height={100} />
                )}
            </div>

            <div className="text-2xl font-bold">
                <p className="font-sans">{product.P_Name}</p>
            </div>

            <div className="flex  items-center">
                {/* Icon Coin */}
                <Image src={assests.coin} width={40} height={40} alt="coin" class ="w-7 h-7" />
                <p className="text-3xl font-mono ml-2">{product.Price}</p>
            </div>
        </div>
    )
}
