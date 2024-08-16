"use client";
import { motion } from "framer-motion";
import React,{useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects=[
  {
    num:'01',
    category:'Food Ordering',
    title:'project 1',
    description:"This project is a Food Ordering Website developed using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. The platform allows users to browse a variety of dishes, place orders, and manage their cart, providing a seamless and user-friendly experience for online food ordering.",
    stack:[
      {name:"MongoDB"},{name:"ExpressJS"},{name:"ReactJS"},{name:"NodeJS"}
    ],
    image:'/assets/work/foodsite.png',
    live:"https://foodsite-frontend.onrender.com/",
    github:"https://github.com/gargi-0912/FoodSite",
  
  },
  {
    num:'02',
    category:'Ecomzy',
    title:'project 2',
    description:"Ecomzy is a user-friendly shopping application developed using React. This application allows users to explore a wide range of products, manage their shopping cart, and experience a smooth and intuitive interface.",
    stack:[
      {name:"ReactJS"},{name:"TailwindCSS"},{name:"JavaScript"}
    ],
    image:'/assets/work/Ecomzy.png',
    live:"https://gargigupta-shopapp.netlify.app/",
    github:"https://github.com/gargi-0912/ShopApp2",
  
  },
  {
    num:'03',
    category:'CourseInfoNet',
    title:'project 3',
    description:"CourseInfoNet is an informative web application designed to help users discover and explore various online courses. Developed with a focus on user experience, this project features a clean and intuitive interface that allows users to search for courses, view detailed information, and easily navigate through different categories.",
    stack:[
      {name:"ReactJS"},{name:"TailwindCSS"},{name:"JavaScript"}
    ],
    image:'/assets/work/TopCourses.png',
    live:"https://funny-panda-39790c.netlify.app/",
    github:"https://github.com/gargi-0912/topCourseView",
  
  },
  {
    num:'04',
    category:'Todo App',
    title:'project 4',
    description:"This to-do application allows users to efficiently manage their tasks with a simple and intuitive interface. Users can add and delete tasks, helping them stay organized and on track. The project demonstrates my skills in development and my ability to create user-friendly applications.",
    stack:[
      {name:"ReactJS"},{name:"ReduxToolkit"},{name:"TailwindCSS"},{name:"JavaScript"}
    ],
    image:'/assets/work/Todo.jpg',
    live:"https://moonlit-croquembouche-ebda0f.netlify.app/",
    github:"https://github.com/gargi-0912/TODO_REACT",
  
  },
  {
    num:'05',
    category:'Currency Convertor',
    title:'project 5',
    description:"This currency converter application enables users to easily convert between different currencies in real time. With a clean and user-friendly interface, it provides accurate exchange rates and simple functionality, showcasing my skills in web development and attention to user experience.",
    stack:[
      {name:"ReactJS"},{name:"JavaScript"}
    ],
    image:'/assets/work/currConv.jpg',
    live:"https://polite-kheer-1b774c.netlify.app/",
    github:"https://github.com/gargi-0912/ReactCURR_CONV",
  
  },
  {
    num:'06',
    category:'Password Generator',
    title:'project 6',
    description:"This password generator application creates strong, random passwords to enhance security. With customizable options for length and character types, it provides users with a simple and effective tool to safeguard their online accounts. This project highlights my ability to develop practical utilities with a focus on user security.",
    stack:[
      {name:"TailwindCSS"},{name:"JavaScript"}
    ],
    image:'/assets/work/PassGen.jpg',
    live:"https://monumental-paprenjak-64fc23.netlify.app/",
    github:"https://github.com/gargi-0912/PasswordGenerator",
  
  },
]
const Work = () => {
  const [project,setProject]=useState(projects[0]);

  const handleSlideChange=(swiper)=>{
   const currentIndex=swiper.activeIndex;
   setProject(projects[currentIndex]);

  }
  return <motion.section initial={{opacity:0}}
   animate={{opacity:1,transition:{delay:2.4, duration:0.4,ease:"easeIn"},
  }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent
             text-outline ">{project.num}</div>
             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((item,index)=>{
                  return <li key={index} className="text-xl text-accent">{item.name}
                  {index!==project.stack.length-1 && ","}</li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>

                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          >
            {projects.map((project,index)=>{
              return (<SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center
                 items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full ">
                    <Image src={project.image} fill className="object-cover"
                      alt=""/>
                  </div>
                 </div>
              </SwiperSlide>
              );

            })}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
  
}

export default Work