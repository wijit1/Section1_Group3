import React from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div>
            <nav className="relative flex items-center px-32 py-9 justify-between  bg-amber-100 border border-b-2 border-gray-700">
                {/* Left  Navber */}
                <div>
                    <Image className='absolute p-0 top-0 left-18' src={assests.logoteam} width={175} height={175} alt='Icon company' />
                </div>
                {/* Center Navbar */}
                <div className="flex gap-10 text-2xl text-gray-700 ">
                    
                    <Link href={'/'}>
                        <div className="flex flex-col items-center gap-5 cursor-pointer hover:text-red-400 hover:underline">
                            <Image src={assests.home} width={40} height={40} alt='home page icon' />
                            <p>Home page</p>
                        </div>
                    </Link>
                
                    <div className="flex flex-col items-center gap-5">
                        <Image src={assests.teamIcon} width={40} height={40} alt='Team Icon' />
                        <p>Teampage</p>
                    </div>
                    <Link href={'/product_man'}>
                        <div className="flex flex-col items-center gap-1">
                            <div className="relative">
                                <Image src={assests.robot} width={40} height={40} alt='Icon product management' />
                                <Image className="absolute right-[-10px] top-[-15px] w-5 h-5 " src={assests.setting} width={40} height={40} alt='decorate icon' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p>Product</p>
                                <p>Management</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={'/user_man'}>
                        <div className="flex flex-col items-center gap-1">
                            <div className="relative">
                                <Image src={assests.user} width={40} height={40} alt='Icon Team page ' />
                                <Image className="absolute right-[-10px] top-[-15px] w-5 h-5 " src={assests.setting} width={40} height={40} alt='decorate icon' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p>Account</p>
                                <p>Management</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Search Cart Admin  right navbar */}
                <div className="flex gap-10 text-2xl text-gray-700 justify-center">
                    <div className="border border-l-4 border-gray-600 h-20"> </div>
                    <Link href={'/search'}>
                        <div className="flex flex-col gap-2 items-center">
                            <Image className="w-10 h-10 rotate-[265deg]" src={assests.search} width={40} height={40} alt='Search Icon' />
                            <p>Search</p>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-2 items-center">
                        <Image src={assests.cart} width={40} height={40} alt='Cart Icon' />
                        <p>Cart</p>
                    </div>
                    <Link href={'/login'}>
                        <div className="flex flex-col items-center gap-2">
                            <div className="relative">
                                <Image src={assests.user} width={40} height={40} alt='Management Icon' />
                                <Image className="absolute right-[9px] top-[-18px] w-5 h-5 " src={assests.crown} width={40} height={40} alt='Decorate Icon' />
                            </div>
                            <p>Admin</p>
                        </div>
                    </Link>
                </div>
            </nav>

        </div>
    )
}
