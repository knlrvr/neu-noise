import React from 'react'

import {
  BiRightArrowAlt
} from 'react-icons/bi'

const Integrations = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex items-end space-x-4">
          <span className="text-4xl font-light">Integrations</span>
          <div className="pb-2 flex items-center space-x-2 group cursor-pointer">
            <p className="font-mono text-sm underline underline-offset-4 decoration-2">See All</p>
            <BiRightArrowAlt 
              className="group-hover:translate-x-1 transition duration-200" />
          </div>
        </div>
        <div className="py-2">
          <p className="font-mono text-sm text-center">
            GreyNoise integrates into your favorite tools.
          </p>
        </div>
        <div className="py-16 pb-24">
          [insert logos or whatever lol]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-b-2 border-[#222]">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-8">
          1
        </div>
        <div className="p-8">
          2
        </div>
      </div>
    </div>
  )
}

export default Integrations