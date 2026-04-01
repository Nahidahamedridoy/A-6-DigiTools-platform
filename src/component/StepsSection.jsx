import React from 'react';

const StepsSection = () => {
    return (
        <div class="bg-gray-50 py-16 px-4">
            <div class="max-w-4xl mx-auto text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Get Started In 3 Steps</h2>
                <p class="text-gray-500 text-lg">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div class="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span class="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">01</span>
                    <div class="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <img src="/src/assets/user.png" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
                    <p class="text-gray-500 leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div class="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span class="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">02</span>
                    <div class="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <img src="/src/assets/package.png" alt="" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Choose Products</h3>
                    <p class="text-gray-500 leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div class="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span class="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">03</span>
                    <div class="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <img src="/src/assets/rocket.png" alt="" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Start Creating</h3>
                    <p class="text-gray-500 leading-relaxed">Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default StepsSection;