import React from 'react';

const Rating = () => {
    return (
        <div>
            <section className="bg-[#8b2cf5] py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-white gap-8 md:gap-0">

                    <div className="text-center flex-1 md:border-r border-white/20 last:border-none">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
                        <p className="text-lg opacity-80">Active Users</p>
                    </div>

                    <div className="text-center flex-1 md:border-r border-white/20 last:border-none">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
                        <p className="text-lg opacity-80">Premium Tools</p>
                    </div>

                    <div className="text-center flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
                        <p className="text-lg opacity-80">Rating</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Rating;