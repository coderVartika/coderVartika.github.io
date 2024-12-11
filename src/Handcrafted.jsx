import React from 'react'

const Handcrafted = () => {
  return (
    <>
       <div className="xl:ml-20 xl:mt-10 pl-5 pr-5 mt-10">
        <span className="text-2xl font-bold font-sans text-[#1e3932] flex justify-center xl:justify-start ">
             Handcrafted Curations
        </span>
        <div className="mt-5 mr-20 flex  justify-between flex-wrap">
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2  hover:border-[#00754a] hover:border-2" src={require("./images/Bestseller.webp")} alt="BestSeller" />
            <span className="font-semibold text-sm">Bestseller</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2  hover:border-[#00754a] hover:border-2" src={require("./images/Drinks.webp")} alt="Drinks" />
            <span className="font-semibold text-sm">Drinks</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2  hover:border-[#00754a] hover:border-2" src={require("./images/Food.webp")} alt="Food" />
            <span className="font-semibold text-sm">Food</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2  hover:border-[#00754a] hover:border-2" src={require("./images/Merchandise.webp")} alt="Merchandise" />
            <span className="font-semibold text-sm">Merchandise</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2  hover:border-[#00754a] hover:border-2" src={require("./images/CoffeeAtHome.webp")} alt="CoffeeAtHome" />
            <span className="font-semibold text-sm">Coffee At  Home</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2  hover:border-[#00754a] hover:border-2" src={require("./images/ReadyToEat.webp")} alt="Ready to Eat" />
            <span className="font-semibold text-sm">Ready to eat</span>
        </div>
        </div>
       </div>
    </>
  )
}

export default Handcrafted