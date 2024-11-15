'use client';

import { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { ShopContext } from "@/context/ShopContext";


export default function UploadImage() {
    const [urlimage, setUrlImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const { imagefile, setImagefile } = useContext(ShopContext);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImagefile(selectedFile);
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };


    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles && droppedFiles[0]) {
            setImagefile(droppedFiles[0]);
        }
    };


    useEffect(() => {
        if (imagefile) {
            setUrlImage(URL.createObjectURL(imagefile))
        }
    }, [imagefile, setImagefile])

    return ( 
        <div>
            <div className="flex items-center justify-start">
                <h1 className="text-3xl">Product Image</h1>
            </div>
            <div className="flex flex-col p-2 mt-3 border-4 gap-10 border-gray-400 rounded-xl w-full">
                <div className="flex flex-col gap-3">
                    <p className="text-gray-400">Product Image</p>

                    <label
                        className={`border-2 border-dashed p-5 m-5 text-center cursor-pointer
          ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"}
        `}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        <input
                            id="file-upload"
                            type="file"
                            onChange={handleFileChange}
                            className=""
                        />
                        {imagefile ? (
                            <div className="flex flex-col items-center justify-center gap-1 ">
                                <p className="text-gray-700 text-xl">Selected File: </p>
                                <p className="text-red-500 text-lg">{imagefile.name}</p>
                                {urlimage ? (<Image src={urlimage} width={150} height={150} alt="image upload" />) : (null)}
                            </div>
                        ) : (
                            <p className="text-gray-500">
                                Drag and drop a file here, or click to select a file
                            </p>
                        )}
                    </label>

                </div>
            </div>
        </div>
    )
}
