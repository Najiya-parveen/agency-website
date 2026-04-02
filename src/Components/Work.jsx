import React from "react"
import { workItems } from "../assets/assets"
export default function Work(){
      return(
            <div className="py-20">
                  {/*container div*/}
                  <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
                        {/*work content*/ }
                        <div className="text-center">
                              <h1 className="text-4xl md:text-5xl">Our latest work</h1>
                              <p className="text-2xl max-w-2xl mx-auto text-neutral-400 mt-4">Whether you're launching a new business or looking to elevate your existing brand</p>
                        </div>

                        {/*work secttion*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                             {
                               workItems.map((work,index) => (
                                    <div className="mt-15 rounded-xl overflow-hidden border border-[#ffcb05] items-center hover:scale-105 transition duration-300 cursor-pointer">
                                          <img src={work.img} className="object-cover"></img>
                                          <div className="p-6">
                                                <h1 className="text-xl text-neutral-700">{work.title} </h1>
                                                <p className="pt-4 text-neutral-600 font-normal"> {work.description} </p>
                                          </div>
                                    </div>
                              ))
                             }
                        </div>
                  </div>
            </div>
      )
}