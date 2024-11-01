import React from 'react'
import Image from 'next/image'
import { assests } from '@/assets/assets'
export const Hero = () => {
    return (
        <div>
            {/* ***************** Hero *************************** */}
            <div className="flex flex-row text-4xl text-gray-800 gap-0 bg-[#FFCA48] justify-center ">
                <div className="flex flex-col items-center gap-4 py-6 px-10 ">
                    <Image className="w-[320px] h-[410px] rounded-3xl" src={assests.narutoA} alt='Naruto '  />
                    <p>Naruto</p>
                </div>
                <div className="flex flex-col items-center gap-4 py-6 px-10 ">
                    <Image className="w-[320px] h-[410px] rounded-3xl" src={assests.Goku} alt='Goku  '  />
                    <p>Dragon Ball</p>
                </div>
                <div className="flex flex-col items-center gap-4 py-6 px-10 ">
                    <Image className="w-[320px] h-[410px] rounded-3xl" src={assests.luffyG5} alt='Luffy gear 5 '  />
                    <p>One Piece</p>
                </div>
                <div className="flex flex-col items-center gap-4 py-6 px-10 ">
                    <Image className="w-[320px] h-[410px] rounded-3xl" src={assests.friren} alt='friren '  />
                    <p>Frieren</p>
                </div>
            </div>

        </div>
    )
}
