import React from 'react';

function CoffeeCulture() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Learn more about the world of coffee!</h1>

        <div className="bg-black rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg" alt="Coffee brewing" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black"></div>
          </div>
          <div className="p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Art & Science Of Coffee Brewing</h2>
            <p className="text-lg mb-6">Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
{/* 
        <div className="flex justify-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Discover More</button>
        </div> */}
      </div>
    </div>
  );
}

export default CoffeeCulture;