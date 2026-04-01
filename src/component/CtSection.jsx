import React from "react";

const CTSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>

        {/* Subtitle */}
        <p className="text-lg mb-8 text-gray-200">
          Join thousands of professionals who are already using Digitoools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        {/* Small text */}
        <p className="text-sm text-gray-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTSection;