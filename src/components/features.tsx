import React from 'react'

import {
  AiOutlineControl
} from 'react-icons/ai'
import {
  BiTargetLock,
  BiRadar,
  BiCheck,
  BiRightArrowAlt
} from 'react-icons/bi'
import {
  BsDot
} from 'react-icons/bs'

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto pt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-[#222]">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-4 relative">
          <span className="text-sm uppercase font-semibold tracking-tight">
            Maximize SOC efficiency by <br /> reducing noisy alerts.
          </span>
          <div className="py-12">
            <AiOutlineControl 
              className="text-6xl" />
          </div>
          <div className="flex flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Deprioritize events from benign IPs and common business services.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Classification of IP intent reduces time to triage.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Automate workflows and filter noisy alerts across SIEM, SOAR, TIP and other tools.
            </p>
          </div>
          <div className="absolute bottom-2 left-4 flex space-x-4 items-start pt-12 pb-4 text-xs font-mono">
            <span>20% increased capacity in the <br />SOC.</span>
          </div>

          <div className="cursor-pointer group absolute border-2 border-[#222] h-12 w-12 rounded-full -bottom-6 right-3 bg-white flex justify-center items-center">
            <BiRightArrowAlt 
              className="text-2xl group-hover:-rotate-45 transition duration-200" />
          </div>
        </div>

        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-4 relative">
          <span className="text-sm uppercase font-semibold tracking-tight">
            Defend against mass <br /> exploitation. <br />
          </span>
          <div className="pt-12 pb-12">
            <BiRadar 
              className="text-6xl" />
          </div>
          <div className="flex flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Deprioritize events from benign IPs and common business services.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Classification of IP intent reduces time to triage.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Automate workflows and filter noisy alerts across SIEM, SOAR, TIP and other tools.
            </p>
          </div>
          <div className="absolute bottom-2 left-4 flex space-x-4 pt-12 pb-4 text-xs font-mono">
            <span>Optimize patching & protect during <br /> &quot;window of exposure.&quot;</span>
          </div>

          <div className="cursor-pointer group absolute border-2 border-[#222] h-12 w-12 rounded-full -bottom-6 right-3 bg-white flex justify-center items-center">
            <BiRightArrowAlt 
              className="text-2xl group-hover:-rotate-45 transition duration-200" />
          </div>        
        </div>

        <div className="p-4 relative">
          <span className="text-sm uppercase font-semibold tracking-tight">
            Contextualize and automate <br /> threat hunting.
          </span>
          <div className="py-12">
            <BiTargetLock
              className="text-6xl" />
          </div>
          <div className="flex flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Enable threat hunters to discover the tactics, techniques, and procedures (TTPs) of 
              adversaries with attack telemetry. 
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Bolster and automate existing cyber threat investigations with IP metadata.
            </p>
          </div>
          <div className="absolute bottom-2 left-4 flex space-x-4 pt-14 lg:pt-[6.2rem] xl:pt-[6.2rem] pb-4 text-xs font-mono">
            <span>Gain valuable insight into emerging <br /> threats on the internet.</span>
          </div>

          <div className="cursor-pointer group absolute border-2 border-[#222] h-12 w-12 rounded-full -bottom-6 right-3 bg-white flex justify-center items-center">
            <BiRightArrowAlt 
              className="text-2xl group-hover:-rotate-45 transition duration-200" />
          </div>        
        </div>
      </div>

      <div className="h-28 w-full bg-green-500 flex justify-between items-center text-6xl font-semibold px-2">
        <p>G</p>
        <p>R</p>
        <p>E</p>
        <p>Y</p>
        <p>N</p>
        <p>O</p>
        <p>I</p>
        <p>S</p>
        <p>E</p>
      </div>

    </div>
  )
}

export default Features