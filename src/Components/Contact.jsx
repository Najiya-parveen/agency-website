import React from "react";
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Contact(){
      return(
            <div className="bg-white py-20">
                 <div className="container mx-auto px-6">
                      <div className="text-center mb-16">
                           <h1 className="text-4xl md:text-5xl lg:text-6xl">Reach out to us</h1>
                           <p className="text-neutral-600 font-normal max-w-xl mx-auto mt-2">Let's talk! Whether it's a quick question or a big project, we're just a message away.</p>
                      </div>  
                 </div> 

                 {/* Form section */}
                 <div className="max-w-2xl mx-auto">
                   <form>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {/* Name field */}
                         <div>
                              <label htmlFor="" className="block text-neutral-700">Your name</label>
                              <div className="flex border rounded-sm py-1 px-4 mt-2 gap-4 items-center">
                                   <FaUser/>
                                   <input id="name" 
                                   placeholder="Enter your name" className="w-full outline-none placeholder:text-sm" ></input>
                              </div>
                         </div>

                         {/* Email field */}
                         <div>
                             <label htmlFor="" className="text-neutral-700">Your Email</label> 
                             <div className="border rounded-sm flex items-center py-1 px-4 gap-4 mt-2">
                               <FaEnvelope/>
                               <input placeholder="Enter your email" className="w-full outline-none placeholder:text-sm " ></input>
                             </div>
                         </div>
                    </div>
                    
                    <div className="mt-6">
                         <label htmlFor="" className="text-neutral-700">Your message</label>
                         <textarea className="w-full border rounded-sm h-60 px-5 py-3 outline-none" placeholder="Enter your message"></textarea>
                    </div>
                    {/* button */}
                    <button className="bg-[#ffcb05] flex rounded-full items-center px-5 py-2 mt-3 cursor-pointer font-semibold">
                         submit
                         <FaArrowRight/>
                    </button>
                   </form>
                 </div>
            </div>
      )
}