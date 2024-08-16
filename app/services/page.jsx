"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
const services=[
  {
    num:'01',
    title:"Frontend Development",
    description:"Just like this portfolio website, I can make customised web apps and websites according to user's convinience and demands in variety of tech stacks!!",
    href:"https://github.com/gargi-0912/ShopApp2"
  },
  {
    num:'02',
    title:"UI/UX Design",
    description:"With a strong grasp of UI/UX principles and technologies, I can design and implement your website’s interface to enhance user experience, ensuring it’s both intuitive and visually appealing.",
    href:"https://github.com/gargi-0912/topCourseView"
  },
  {
    num:'03',
    title:"Problem Solving",
    description:"I possess a strong command of Data Structures and Algorithms, enabling me to efficiently resolve bugs or implement solutions in any programming language you prefer.",
    href:"https://leetcode.com/u/gleam_15/"
  },
  {
    num:'04',
    title:"Backend Development",
    description:"Whether it’s building a backend from scratch, integrating with a database, or troubleshooting issues, I’m ready to take on the challenge. Just let me know what you need, and I’ll work diligently to deliver a solution that meets your expectations!",
    href:"https://github.com/gargi-0912/FoodSite"
  },
];
import {motion} from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} 
        animate={{opacity:1,
          transition:{delay:2.4, duration:0.4,ease:"easeIn"},
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
{services.map((service,index)=>{
  return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
    <div className="w-full flex justify-between items-center ">
      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
       transition-all duration-500 ">{service.num}</div>
      <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
      <BsArrowDownRight className="text-primary text-3xl"/>
      </Link>
    </div>
    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
    <p className="text-white/60">{service.description}</p>
    <div className="border-b border-white/20 w-full"></div>
  </div>
})}
        </motion.div>
      </div>
    </section>
  )
}

export default Services