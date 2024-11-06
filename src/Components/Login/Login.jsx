import React from "react";
import { Helmet } from "react-helmet"


const Contract = () => {
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <Helmet>
        <title>Login</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Your Login Page</h3>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contract;
