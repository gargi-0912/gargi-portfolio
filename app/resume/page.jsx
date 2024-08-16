"use client"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs} from "react-icons/si";

const about={
  title:"About me",
  description:"Hi, I’m Gargi, a MERN Stack developer from India. I specialize in problem-solving through Data Structures and Algorithms (DSA) and web development across various stacks. My focus is on creating seamless user experiences through frontend development while managing backend processes, databases, hosting, and deployment. I'm always eager to tackle new challenges and expand my skill set. Let’s connect!",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Gargi Gupta"
    },
    {
      fieldName:"Phone",
      fieldValue:"8171389113"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName:"Email",
      fieldValue:"gargigupta09122003@gmail.com"
    },
    {
      fieldName:"Language",
      fieldValue:"English, Hindi",
    },
  ]
};
//experience data 
const experience={
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:
  "As a proficient MERN Stack Developer, I have built a strong foundation in developing robust and scalable web applications using MongoDB, Express.js, React, and Node.js. My experience spans both professional internships and academic projects",
  items:[
    {
      company:"Panashee Experts P.Ltd.",
      position:"Full Stack Developer Intern",
      duration:"May 2024-July 2024",
    },
    {
      company:"Fair Deal Global",
      position:"Web Developer Intern",
      duration:"June 2023-July 2023",
    },
    {
      company:"Intern Pe",
      position:"Frontend Web Developer Intern",
      duration:"July 2023-August 2023",
    },
    
  ],
};
const education={
  icon:'/assets/resume/cap.svg',
  title:'My education',
  description:
  "My academic journey built a strong foundation in Software Engineering, focusing on software development and project management. I gained in-depth knowledge in areas such as Data Structures, Algorithms, Database Management, and Full-Stack Web Development.",

  items:[
    {
      institution:"Chhatrapati Shahu Ji Maharaj University,UIET, Kanpur",
      degree:"B.Tech - CSE ",
      duration:"2021-2025",
    },
    
    
  ],
};
//skills data
const skills={
  title:"My skills",
  description:
  "As a MERN Stack developer, I excel in MongoDB for database management, Express.js for RESTful APIs, React for dynamic user interfaces, and Node.js for server-side development. My skills include optimizing performance and ensuring seamless integration across the stack, complemented by knowledge of UI/UX principles and deployment processes.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html 5",
    },
    {
      icon:<FaCss3/>,
      name:"css 5",
    },
    {
      icon:<FaJs/>,
      name:"javascript",
    },
    {
      icon:<FaReact/>,
      name:"react.js",
    },
    // {
    //   icon:<SiNextdotjs/>,
    //   name:"next.js",
    // },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js",
    },
    {
      icon:<FaFigma/>,
      name:"figma",
    },

  ]
};
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4, ease:'easeIn'},
}} 
className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
  <div className="container mx-auto">
    <Tabs 
    defaultValue="experience"
    className="flex flex-col xl:flex-row gap-[60px]"
    
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
       gap-6">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>

      </TabsList>
      <div className="min-h-[70vh] w-full">
        <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {experience.items.map((item,index)=>{
                return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>

                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.company}</p>
                  </div>
                </li>
              })}
            </ul>
          </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item,index)=>{
                return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>

                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.institution}</p>
                  </div>
                </li>
              })}
            </ul>
          </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill,index)=>{
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index)=>{
                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
              })}
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  </div>
  </motion.div>
  
}

export default Resume;