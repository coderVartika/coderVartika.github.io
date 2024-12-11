import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0E382C] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 pl-5">
          <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
        
        </div>
        <div className="md:w-1/4">
        
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <ul>
            <li className="mb-2">Our Heritage</li>
            <li className="mb-2">Coffeehouse</li>
            <li>Our Company</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Responsibility</h2>
          <ul>
            <li className="mb-2">Diversity</li>
            <li className="mb-2">Community</li>
            <li className="mb-2">Ethical Sourcing</li>
            <li className="mb-2">Environmental Stewardship</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">FAQs</li>
            <li className="mb-2">Starbucks India Mobile App Terms of Use</li>
            <li className="mb-2">Customer Service</li>
            <li className="mb-2">Delivery</li>
            <li className="mb-2">Season's Gifting</li>
            <li>Loyalty Program Terms and Conditions</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">SOCIAL MEDIA</h2>
          <div className="flex gap-4">
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="mt-4">
            <img src={require("./images/appstoreiOS.png")} alt="" />
           <img src={require("./images/appstoreAndroid.png")} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;