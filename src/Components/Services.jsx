import React from "react";
import { FaCode } from "react-icons/fa";
import { services } from "../assets/assets";

export default function Services(){
      return(
            <div id="services" className="py-20">
                  <div className="container mx-auto px-10 sm:px-12 md:px-24 lg:px-40">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">How we can Help you?</div>
                        <p className="mb-10 font-light text-zinc-500 text-xl max-w-2xl mx-auto text-center">whether you're launching a new business or looking to elevate your existing brand.</p>
                  </div>
                  {/*services data display*/}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 container mx-auto px-10 sm:px-12 md:px-24 lg:px-40">
                      {
                        services.map((service, index) => (
                            <div key={index} className="border border-[#ffcb05] rounded-xl items-center flex flex-col
                             lg:flex-row hover:scale-105 transition duration-300 cursor-pointer gap-6 p-12">
                              {/*icons8*/}
                              <div className="flex items-center shrink-0 justify-center w-20 aspect-square rounded-full border-3 border-yellow-200">
                                    <service.icon className="w-10 h-10 text-[#ffcb05]"/>
                              </div>
                              {/*content*/}
                              <div>
                                    <h1 className="text-center text-xl md:text-2xl" >{service.title}</h1>
                                    <p className="text-center mt-4 text-zinc-500 font-light">{service.description}</p>

                              </div>
                             </div>  
                        ))
                      }
                  </div>
            </div>
      )
}