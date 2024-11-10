'use client'
import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useState } from 'react';

const PriceRangeFilter = () => {

  const {priceRange,setPriceRange,handleMaxPriceInput,handleMinPriceInput,minPrice,maxPrice} = useContext(ShopContext); 


  return (
    <div className="w-full max-w-md space-y-4 p-4 rounded-lg border bg-white">
      <h3 className="text-lg font-semibold">ราคา</h3>
      
      <div className="space-y-4">
        {/* แถบสไลด์ */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="slider"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="slider"
        />
        
        {/* กล่องป้อนราคาขั้นต่ำและขั้นสูง */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={handleMinPriceInput}
            min={minPrice}
            max={priceRange[1]}
            className="w-20 text-center bg-gray-100"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={handleMaxPriceInput}
            min={priceRange[0]}
            max={maxPrice}
            className="w-20 text-center bg-gray-100"
          />
        </div>

        {/* ปุ่มค้นหา */}
        {/* <button 
          onClick={handleSearch}
          className="w-full bg-yellow-300 hover:bg-yellow-300 text-white py-2 rounded-md"
        >
          ค้นหา
        </button> */}
      </div>
    </div>
  );
};

export default PriceRangeFilter;