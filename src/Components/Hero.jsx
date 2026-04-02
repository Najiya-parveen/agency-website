import React from "react";
import { assets } from "../assets/assets";
import { FaApple, FaFacebook, FaGoogle, FaGoogleDrive, FaInstagram, FaLinkedin, FaMicrosoft } from "react-icons/fa";
export default function Hero(){
      return(
      <div className="w-full py-40">
            <div className="container mx-auto px-6">
                  <div className=" mb-12 border border-[#ffcb05] rounded-full flex items-center mx-auto pl-2 w-full md:w-[25%] text-xs md:text-base py-2 gap-6">
                        <div className="flex items-center -space-x-3">
                              <img className="w-8 h-8 rounded-full" src={assets.profile1}></img>
                              <img className="w-8 h-8 rounded-full" src={assets.profile2}></img>
                              <img className="w-8 h-8 rounded-full" src={assets.profile3}></img>
                              <img className="w-8 h-8 rounded-full" src={assets.profile4}></img>
                              <img className="w-8 h-8 rounded-full" src={assets.profile5}></img>
                        </div>
                        <span>
                              Trusted by 20k+ people
                        </span>
                  </div>
                  <h1 className="text-black text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                        <span>We Help Brands Grow With</span>
                        <br></br>
                        <span className="text-[#ffcb05]">Performance</span>
                        <span>Marketing</span>
                  </h1>
                  <p className=" max-w-xl mx-auto mb-12 text-center text-2xl font-[150]">At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.</p>
                  <div className="mb-16 flex items-center justify-center gap-6">
                        <button className="bg-[#ffcb05] font-medium rounded-full items-center px-6 py-2.5 cursor-pointer">Contact Me</button>
                        <button className="text-white bg-black font-semibold rounded-full px-6 py-2.5 cursor-pointer">Digital Market</button>
                  </div>
                  <div className="mx-auto rounded-2xl shadow overflow-hidden max-w-5xl">
                        <img className="w-full h-full object-cover" src={assets.hero}></img>
                  </div>
            </div>
      </div>
      );
} 