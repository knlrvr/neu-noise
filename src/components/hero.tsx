import React from 'react'
import Link from 'next/link'

import {
  BiRightArrowAlt
} from 'react-icons/bi'

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <div className="py-2 md:py-6 flex justify-center">
        <Link 
          href="/"
          className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-green-400 group relative">
          <span className="text-center text-sm">
            Our 2022 Mass Exploitation <br className="block md:hidden" /> Retrospective is out now 
          </span>
          <BiRightArrowAlt 
            className="ml-4 group-hover:translate-x-2 transition duration-200" />
          <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2.5 left-1"></div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center text-center pt-6">
        <h2 className="text-5xl md:text-8xl font-thin">
          Turning internet
          <span className="font-light"> noise </span>
          into
          <span className="font-light"> intelligence</span>.
        </h2>
        <p className="pt-8 max-w-4xl mx-auto text-lg font-light">
          Trusted by global enterprises and thousands of users to drive security
          team efficiency, eliminate false positives and focus on real threats.
        </p>
      </div>

      <div className="flex justify-evenly py-12">
        <Link 
          href="/"
          className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-yellow-400 relative">
          <span className="text-center text-xs md:text-sm uppercase font-mono tracking-widest">
            Search For Free
          </span>
          <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2.5 left-1"></div>
        </Link>
        <Link 
          href="/"
          className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-red-500 group relative">
          <span className="text-center text-xs md:text-sm uppercase font-mono tracking-widest">
            Request A Demo
          </span>
          <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2.5 left-1"></div>
        </Link>
      </div>
    </div>
  )
}

export default Hero