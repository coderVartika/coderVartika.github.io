import React from 'react'

const GreenNav = () => {
  return (
   <>
   <div className="bg-[#1e3932] w-100 mt-5 mb-5 p-6 lg:pl-20 lg:pr-20 flex xl:justify-between items-center flex-col xl:flex-row">
    <div>
       <span className="text-white text-xl font-sans"> Starbucks</span>
    </div>
    <div>
       <span className="text-white text-sm font-sans border-white border-2 p-1 pl-2 pr-2 rounded-3xl mt-2 xl:mt-0 cursor-pointer"> Know more</span>
    </div>
   </div>
   </>
  )
}

export default GreenNav;