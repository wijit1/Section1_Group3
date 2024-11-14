import React, { useContext, useEffect, useState } from 'react'
import { assests } from '../../assets/assets'
import Image from 'next/image'
import { ShopContext } from '@/context/ShopContext';
export default function UploadProfile() {
    const { imageProfile, setImageProfile } = useContext(ShopContext);
    const [urlImage, setUrlImage] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImageProfile(selectedFile)
        }
    };

    useEffect(() => {
        if (imageProfile) {
            setUrlImage(URL.createObjectURL(imageProfile))
            console.log(imageProfile);
        }
    }, [imageProfile, setImageProfile])
    return (
        <div className=' flex flex-col overflow-hidden items-center w-32 h-full'>
            {!imageProfile ? (
                <>
                    <Image src={assests.iconprofile} alt='Default' width={100} height={100} />
                    <label className=' text-mg cursor-pointer underline text-blue-500 '>
                        <input onChange={handleFileChange} className='hidden' type="file" name="Upload" id="" />
                        Select Profile
                    </label>

                </>
            ) : (
                <>
                    <Image className=' rounded-full ' src={urlImage} alt='Default' width={100} height={100} />
                    <label className=' text-mg cursor-pointer underline text-red-500 '>
                        <input onChange={handleFileChange} className='hidden' type="file" name="Upload" id="" />
                        Change Profile
                    </label>

                </>
            )}
        </div>
    )
}
