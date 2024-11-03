import React from "react";

const Footer = () => {
  return (
   <>
     <div className='text-center w-2/3 mx-auto space-y-4 my-4'>
            <h2 className='text-4xl font-semibold'>Gadget Heaven</h2>
            <h2 className='w-2/3 mx-auto text-gray-500'>Leading the way in cutting-edge technology and innovation.</h2> 
            <hr />         
        </div>
    
    <footer className="flex justify-evenly mx-auto my-5">
      <nav className="flex flex-col">
        <h6 className="font-semibold text-xl mb-2">Services</h6>
        <a className="link link-hover">Product Support</a>
        <a className="link link-hover">Order Tracking</a>
        <a className="link link-hover">Shipping & Delivery</a>
        <a className="link link-hover">Returns</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-semibold text-xl mb-2">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-semibold text-xl mb-2">Terms of Service</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
    </footer></>
  );
};

export default Footer;
