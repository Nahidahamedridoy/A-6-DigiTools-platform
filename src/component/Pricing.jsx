import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {/* Starter */}
          <div className="bg-white rounded-xl shadow p-6 text-left">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-500">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">
              $0 <span className="text-sm text-gray-500">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg p-6 text-left relative">
            
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-gray-200">For professionals</p>

            <h2 className="text-3xl font-bold mt-4">
              $29 <span className="text-sm">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full hover:bg-gray-200">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-xl shadow p-6 text-left">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-gray-500">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-4">
              $99 <span className="text-sm text-gray-500">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;