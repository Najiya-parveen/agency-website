import React from "react";
import { FaApple, FaFacebook, FaGoogle, FaGoogleDrive, FaInstagram, FaLinkedin, FaMicrosoft } from "react-icons/fa";

export default function Company(){
      return(
            <div className="py-20 bg-white">
                  <div className="container mx-auto px-6">
                        <p className="text-xl md:text-2xl text-center">Trusted by leading companies</p>
                        <div className="flex flex-wrap pt-12 items-center justify-center gap-12">
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaMicrosoft className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaFacebook className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaLinkedin className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaApple className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaInstagram className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaGoogle className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                                    <div className="w-20 h-20 border rounded-full flex items-center justify-center text-[#ffcb05] hover:scale-105 duration-300 transition cursor-pointer">
                                    <FaGoogleDrive className="w-10 h-10 text-[#ffcb05]" />
                                    </div>
                        </div>
                  </div> 
            </div>
      )
}