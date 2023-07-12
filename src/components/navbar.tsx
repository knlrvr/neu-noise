'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { 
  AiOutlineSearch,
  AiOutlineDown
} from 'react-icons/ai'
import {
  BsChevronDown
} from 'react-icons/bs'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkHover = (index: number) => {
    setActiveLink(index);
  };
  const handleLinkLeave = () => {
    setActiveLink(null);
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      {/* logo & explore */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-4xl lg:text-6xl uppercase font-bold leading-tight tracking-widest text-[#222]">GreyNoise</h1>
        </div>
        <div className="relative">
          <div className="border-2 border-[#222] py-1 md:py-2 px-2 md:px-4 flex items-center space-x-2 uppercase font-light text-xs md:text-sm">
            <AiOutlineSearch 
              className="text-lg md:text-xl" />
            <span>explore our data</span>
          </div> 
        </div>
      </div>

      {/* site links */}
      <div className="mt-4 mb-2 flex justify-between border-t-2 border-b-2 border-[#222] font-light text-xs md:text-sm uppercase">
        <Link href="/" className="w-full py-4 text-center hover:text-yellow-500">
          pricing
        </Link>
        <div className="border-r-2 border-[#222]"
        ></div>
        <Link href="/#about" className="w-full py-4 text-center hover:text-yellow-500">
          blog
        </Link>
        <div className="border-r-2 border-[#222]"
        ></div>
        <Link href="/#more" className="w-full py-4 text-center hover:text-yellow-500">
          documentation
        </Link>
        <div className="border-r-2 border-[#222]"
        ></div>
        <Link href="/#contact" className="w-full py-4 text-center hover:text-yellow-500">
          log in
        </Link>
      </div>

      {/* more links */}
      <div className="uppercase mt-2 flex items-center justify-between py-2 text-xs">
        <div
          className="flex items-center space-x-2 group"
          onMouseEnter={() => handleLinkHover(0)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="">Product</span>
          <BsChevronDown className="" />
          {activeLink === 0 && (
            <div className="absolute top-[11.8rem] left-0 right-0 p-2">
              <div className="max-w-7xl mx-auto h-48 border-2 border-[#222] bg-white">
                <div>product</div>
                <div>product</div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex items-center space-x-2 group"
          onMouseEnter={() => handleLinkHover(1)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="">solutions</span>
          <BsChevronDown className="" />
          {activeLink === 1 && (
            <div className="absolute top-[11.8rem] left-0 right-0 p-2">
              <div className="max-w-7xl mx-auto h-48 border-2 border-[#222] bg-white">
                <div>solutions</div>
                <div>solutions</div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex items-center space-x-2 group"
          onMouseEnter={() => handleLinkHover(2)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="">resources</span>
          <BsChevronDown className="" />
          {activeLink === 2 && (
            <div className="absolute top-[11.8rem] left-0 right-0 p-2">
              <div className="max-w-7xl mx-auto h-48 border-2 border-[#222] bg-white">
                <div>resources</div>
                <div>resources</div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex items-center space-x-2 group"
          onMouseEnter={() => handleLinkHover(3)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="">company</span>
          <BsChevronDown className="" />
          {activeLink === 3 && (
            <div className="absolute top-[11.8rem] left-0 right-0 p-2">
              <div className="max-w-7xl mx-auto h-48 border-2 border-[#222] bg-white">
                <div>company</div>
                <div>company</div>
              </div>
            </div>
          )}
        </div>
        <div
          className="flex items-center space-x-2 group"
          onMouseEnter={() => handleLinkHover(4)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="">partners</span>
          <BsChevronDown className="" />
          {activeLink === 4 && (
            <div className="absolute top-[11.8rem] left-0 right-0 p-2">
              <div className="max-w-7xl mx-auto h-48 border-2 border-[#222] bg-white">
                <div>partners</div>
                <div>partners</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar