import React from 'react';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <>
    <div className="pl-5 pr-5 xl:pl-20 xl:pr-20 mt-5 xl:flex xl:items-center xl:justify-between">

        <div className="xl:flex xl:items-center">
        <div className="flex justify-center">
            <img src={require("./images/logo.png")} alt="logo" height={40} width={40} className="cursor-pointer"/>
        </div>
        <div className="flex flex-wrap justify-between">
            <Link to="/home" className="xl:ml-12 text-[#212529] font-semibold cursor-pointer underline underline-offset-8 decoration-[#00754a] decoration-2">Home</Link>
            <Link to="/gift" className="xl:ml-12 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">Gift</Link>
            <Link to="/order" className="xl:ml-12 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">Order</Link>
            <Link to="/pay" className="xl:ml-12 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">Pay</Link>
            <Link to="/store" className="xl:ml-12 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">Store</Link>
        </div>
        </div>
        <div className="flex items-center flex-wrap ml-60">
          <div>
             <input type="text"
             className="text-xs border-2 p-2 rounded-3xl pl-8 w-56 focus:border-black"
             placeholder="looking for something specific ?"
             />
          </div>
          <div className="ml-28">
            <img src={require("./images/profile-removebg-preview.png")} alt="" 
            height={30} width={30}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default App;