import React from 'react'
import { ProductItem } from './ProductItem'
import { products } from '@/assets/assets';
export const Collection = () => {
    
  return (
    <div className='flex  w-full border border-red-700 rounded-xl p-10 flex-wrap gap-[50px]'>
        {products.map((product)=>(
            <ProductItem product={product}/>
            
        ))}
    </div>
)
}
