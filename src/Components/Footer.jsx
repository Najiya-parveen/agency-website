import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
      return(
            <div className="py-20">
                  <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                              {/* Left section */}
                              <div>
                                    <span className="font-semibold text-neutral-600 text-2xl">BrightMatter.ai</span>
                                    <div className="w-4 h-4 rounded-full bg-[#ffcb05]"></div>
                                    <p className="text-md font-normal text-neutral-500 py-5">Whether you're launching a new business or looking to elevate your existing brand.</p>
                                    <div className="flex gap-5">
                                          <a href="#Home" className="text-neutral-500 font-semibold">Home</a>
                                          <a href="#Services" className="text-neutral-500 font-semibold">Services</a>
                                          <a href="#Our Works" className="text-neutral-500 font-semibold">Our Works</a>
                                          <a href="#Contact us" className="text-neutral-500 font-semibold">Contact us</a>
                                    </div>
                              </div>

                              {/* Right section */}
                              <div>
                                    <h1 className="text-neutral-600 font-semibold text-xl">Subscribe to our newletter</h1>
                                    <p className="text-md text-neutral-500 font-normal py-5">The latest news, articles, and resources, sent to your inbox weekly.</p>
                                    <form>
                                          <input placeholder="Enter your email" className="bg-white rounded border border-neutral-500 py-3 px-4 w-full"></input>
                                          <br></br>
                                          <button className="bg-[#ffcb05] rounded px-5 py-3 mt-5">Subscribe</button>
                                    </form>
                              </div>
                        </div>
                        <hr className="text-neutral-500 mt-5 mb-5"></hr>

                        <div className="flex flex-col md:flex-row items-start gap-6 justify-between">
                              <p className="text-neutral-500">Copyright 2026 © DevPortfolio - All Rights Reserved.</p>
                        <div className="flex gap-4">
                              <FaFacebook 
                              className="text-[#ffcb05] text-2xl"/>
                              <FaTwitter
                              className="text-[#ffcb05] text-2xl"/>
                              <FaInstagram
                              className="text-[#ffcb05] text-2xl"/>
                              <FaLinkedin
                              className="text-[#ffcb05] text-2xl"/>
                              <FaGoogle
                              className="text-[#ffcb05] text-2xl"/>
                        </div>
                        </div>
                  </div>
            </div>
      )
}