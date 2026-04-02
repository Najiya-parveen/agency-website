import React from "react";
import { teams } from "../assets/assets";

export default function Team(){
      return(
            <div className="w-full bg-white">
                  <div className="container mx-auto max-w-6xl px-4 py-20">
                        <div className="text-center max-w-2xl mx-auto">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl text-neutral-800">
                              Meet the team
                        </h1>
                        <p className="mt-5 text-base md:text-lg text-neutral-500 font-light">
                              Behind every successful project is a passionate and skilled team and ouers is no exception.
                        </p>
                        </div>

                        {/* Team section*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-5 md:px-7 lg:px-10">
                              {
                                    teams.map((member,idx) => (
                                          <div key={idx} className="p-6 border rounded-xl border-[#ffcb05] hover:scale-105 
                                                transition duration-300 cursor-pointer flex items-center gap-6 ">
                                                
                                                      <img className="w-12 h-12 rounded-full object-cover" 
                                                           src={member.img} />
                                                      
                                                <div>
                                                      <h1 className="text-sm text-neutral-900 font-semibold">
                                                            {member.name} 
                                                      </h1>
                                                      <p className="text-sm text-neutral-700">
                                                            {member.designation}
                                                      </p>
                                                </div>
                                    
                                                
                                          </div>
                                    ))
                              }
                        </div>
                  </div>

            </div>
      );
}