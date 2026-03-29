import React from 'react';

const DigitalTools = () => {
      return (
            <section className="w-full bg-white py-20">
                  {/* Centered content limited to 1450px */}
                  <div className="max-w-[1450px] mx-auto px-6 text-center">

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
                              Premium Digital Tools
                        </h2>

                        {/* Subheading */}
                        <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                              Choose from our curated collection of premium digital products designed
                              to boost your productivity and creativity.
                        </p>

                        {/* The Switcher / Button Group */}
                        <div className="inline-flex items-center bg-white border border-gray-100 p-1.5 rounded-full shadow-xl shadow-indigo-100/50">

                              {/* Active State (Products) */}
                              <button className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:bg-[#6d28d9]">
                                    Products
                              </button>

                              {/* Inactive State (Cart) */}
                              <button className="text-zinc-700 px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:text-[#7c3aed]">
                                    Cart (2)
                              </button>

                        </div>
                  </div>
            </section>
      );
};

export default DigitalTools;