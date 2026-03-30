import React, { useState } from 'react';

const DigitalTools = () => {
      const handleCartClick = () => {
            console.log('click cart', carts)
      }
      const [carts, setCarts] = useState("products");
      console.log(carts, "this is the carts item");
      return (
            <section className="w-full bg-white py-20">

                  <div className="max-w-[1450px] mx-auto px-6 text-center">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
                              Premium Digital Tools
                        </h2>

                        <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                              Choose from our curated collection of premium digital products designed
                              to boost your productivity and creativity.
                        </p>

                        <div className="inline-flex items-center bg-white border border-gray-100 p-1.5 rounded-full shadow-xl shadow-indigo-100/50">

                              <button onClick={() => setCarts("products")} className={`${carts === "products" ? "bg-[#7c3aed]" : "bg-white" }  text-black px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:bg-[#6d28d9]`}>
                                    Products
                              </button>

                              <button onClick={() => setCarts("cart")} className={`${carts === "cart" ? "bg-[#7c3aed]" : "bg-white"}  text-black px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all `}>
                                    Cart (2)
                              </button>

                        </div>
                  </div>
            </section>
      );
};

export default DigitalTools;