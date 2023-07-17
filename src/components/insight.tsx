import React from 'react'

import {
  BiRightArrowAlt
} from 'react-icons/bi'

const Insight = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-[#222] relative">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col relative">
          <span className="font-light text-sm">01</span>
          <p className="py-6 text-4xl font-light tracking-widest">Collect</p>
          <p className="text-sm font-mono">
            Our sensor network aggregates mass internet scan activity and attack traffic
            while our research team aggregates common business applications.
          </p>
          <div className="absolute top-[92%] right-3/5 md:top-1/2 md:-right-6 bg-blue-200 rounded-full h-12 w-12 border-2 border-[#222] flex justify-center items-center text-2xl">
            <BiRightArrowAlt 
              className="rotate-90 md:rotate-0" />
          </div>
        </div>
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col relative">
          <span className="font-light text-sm">02</span>
          <p className="py-6 text-4xl font-light tracking-widest">Analyze</p>
          <p className="text-sm font-mono">
            Our analytics engine applies automated enrichment and tagging to categorize the 
            mass scanning activity and provide context to communications with common
            business applications.
          </p>
          <div className="absolute top-[92%] right-3/5 md:top-1/2 md:-right-6 bg-orange-300 rounded-full h-12 w-12 border-2 border-[#222] flex justify-center items-center text-2xl">
            <BiRightArrowAlt 
              className="rotate-90 md:rotate-0" />
          </div>
        </div>
        <div className="p-12 flex flex-col">
          <span className="font-light text-sm">03</span>
          <p className="py-6 text-4xl font-light tracking-widest">Deliver</p>
          <p className="text-sm font-mono">
            We deliver high context, timely intelligence via our API, integrations and 
            Visualizer web app. 
          </p>
        </div>
      </div>

    </div>
  )
}

export default Insight