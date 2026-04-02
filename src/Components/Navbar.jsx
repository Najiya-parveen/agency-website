import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar(){
      return(
            <div className='w-full fixed top-0 backdrop-blur-2xl'>
                  <div className='flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40'>
                        {/* Left section */}
                        <div className="items-center gap-2">
                            <span  className="font-bold text-3xl">Brightmatter.io</span> 
                            <div className="w-4 h-4 bg-[#ffcb05] rounded-full"></div> 
                        </div>

                        {/* Menu section*/}
                        <div className="hidden md:flex items-center space-x-6 font-semibold text-black/70">
                             <a href="#Home">Home</a>
                             <a href="#Service">Services</a>
                             <a href="#Work">Work</a>
                             <a href="#Contact">Contact</a> 
                        </div>

                        {/*Right section*/}
                        <div className="hidden md:flex items-center gap-2 bg-[#ffcb05] rounded-full px-6 py-2.5 cursor-pointer font-semibold">
                              <button className="flex items-center gap-3">
                                    Contact Me 
                                    <FaArrowRight/>
                              </button>
                        </div>
                  </div>

            </div>
      )
}