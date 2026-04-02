import React from "react"
import Hero from "../Components/Hero"
import Company from "../Components/Company"
import Services from "../Components/Services"
import Work from "../Components/Work"
import Team from "../Components/Team"
import Contact from "../Components/Contact"
export default function Home(){
      return(
         <>
         <Hero/>
         <Company/>
         <Services/>
         <Work/>
         <Team/>
         <Contact/>
         </>
      )
}