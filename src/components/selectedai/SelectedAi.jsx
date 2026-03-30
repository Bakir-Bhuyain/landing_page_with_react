import React from 'react';

const SelectedAi = ({ selectedCards }) => {
      return (
            <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-100/50 text-left mt-10">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-8">Your Cart</h2>

                  <div className="space-y-4 mb-10">
                        
                        {selectedCards?.map((item) => (
                              <div
                                    key={item.id}
                                    className="flex items-center justify-between p-6 bg-zinc-50/50 rounded-2xl border border-zinc-100/50"
                              >
                                    <div>
                                          <h3 className="font-bold text-zinc-800 text-lg leading-tight">
                                                {item.title}
                                          </h3>
                                          <p className="text-zinc-400 font-medium text-sm mt-1">
                                                ${item.price}
                                          </p>
                                    </div>

                                    <span className="text-[#ff4d6d] font-bold text-sm px-4 py-2 cursor-pointer">
                                          Remove
                                    </span>
                              </div>
                        ))}
                  </div>

                  <div className="border-t border-zinc-50 pt-8 mt-10">
                        <div className="flex justify-between items-center mb-8 px-2">
                              <span className="text-zinc-400 font-medium text-lg">Total:</span>
                              
                              <span className="text-3xl font-extrabold text-zinc-900">
                                    ${selectedCards?.reduce((total, item) => total + item.price, 0) || 0}
                              </span>
                        </div>

                        <button className="w-full py-5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-[1.2rem] text-lg transition-all shadow-lg shadow-purple-200">
                              Proceed To Checkout
                        </button>
                  </div>
            </div>
      );
};

export default SelectedAi;