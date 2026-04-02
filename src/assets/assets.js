import hero from './hero.jpg';
import work1 from './work1.jpg';
import work2 from './work2.jpg';
import work3 from './work3.jpg';
import work4 from './work4.jpg';
import work5 from './work5.jpg';
import work6 from './work6.jpg';
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import profile4 from './profile4.jpg';
import profile5 from './profile5.jpg';
import profile6 from './profile6.jpg';
import profile7 from './profile7.jpg';
import profile8 from './profile8.jpg';
import logo from './logo.png';

import { FaCode, FaPaintBrush,FaBullhorn, FaMobileAlt } from "react-icons/fa";

export const assets = {
      logo,
      hero,
      profile1,
      profile2,
      profile3,
      profile4,
      profile5,
      profile6,
      profile7,
      profile8,
      work1,
      work2,
      work3,
      work4,
      work5,
      work6,
}

export const services = [
      {
            id : 1,
            icon:FaCode,
            title:"Web Development",
            description: "We create fast, responsive, and user-friendly websites tailored to your business needs"
      },
       {
            id : 2,
            icon: FaPaintBrush,
            title:"Graphic Design",
            description: "Eye-catching visuals that speak your brand's language. Our graphic design services"
      },
       {
            id : 3,
            icon: FaBullhorn,
            title:"Digital marketing",
            description: "Grow your online presence with our strategic digital marketing services"
      },
       {
            id : 4,
            icon: FaMobileAlt,
            title:"Mobile App Development",
            description: "Transform your ideas into functional, high-performance mobile apps"
      }
]

export const workItems = [
      {
            img: work1,
            title: "E-commerce Website",
            description: "Developed a fully responsive and high-performance e-commerce platform"
      },
       {
            img: work2,
            title: "Social Media Campaign",
            description: "Designed and executed a 3-month digital marketing campaign"
      },
       {
            img: work3,
            title: "Fitness App",
            description: "Built a web application for a local Gym service"
      },
       {
            img: work4,
            title: "Organic Skincare",
            description: "Created a complete brand identity including logo, packaging for a new organic skincare startup"
      },
       {
            img: work5,
            title: "B2B Company",
            description: "Built a custom CRM system to streamline lead tracking, sales analytics"
      },
       {
            img: work6,
            title: "Website Redesign for Educational Institute",
            description: "Redesigned and optimized the website of an educational institute"
      }
]

export const teams=[
      {
            id:1,
            img:profile1,
            name:"Healy Carter",
            designation: "CEO, founder",
      },
       {
            id:2,
            img:profile2,
            name:"Ammy gorgy",
            designation: "CEO, founder",
      },
       {
            id:3,
            img:profile3,
            name:"alexy cooper",
            designation: "ads manager",
      },
       {
            id:4,
            img:profile4,
            name:"Sara walker",
            designation: "Vice percident",
      },
       {
            id:5,
            img:profile5,
            name:"Jammy cooper",
            designation: "MD",
      },
       {
            id:6,
            img:profile6,
            name:"Emily Carter",
            designation: "Griphics",
      },
       {
            id:7,
            img:profile7,
            name:"John mille",
            designation: "Head manager",
      },
       {
            id:8,
            img:profile8,
            name:"Andorson",
            designation: "Digital Ads",
      }
]