import Link from 'next/link'
import React from 'react'

import { 
  AiOutlineSearch,
  AiOutlineDown
} from 'react-icons/ai'
import {
  BsChevronDown
} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto py-4">
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
      <div className="uppercase mt-2 flex items-center justify-between py-2 text-sm">
        <Link href="/" className="flex items-center space-x-2">
          <span>Product</span>
          <BsChevronDown className="" />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <span>Solutions</span>
          <BsChevronDown className="" />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <span>Resources</span>
          <BsChevronDown className="" />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <span>Company</span>
          <BsChevronDown className="" />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <span>Partners</span>
          <BsChevronDown className="" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar