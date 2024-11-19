'use client';

import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { Description } from '@radix-ui/react-dialog';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Quizzma',
    description: 'Quizzma is an interactive quiz platform focused on educating and raising awareness about social issues, especially gender inequality. With a modern, user-friendly interface built using Next.js 14 and Tailwind CSS, Quizzma offers dynamic, categorized quizzes that allow users to answer questions, save their results, and review their progress over time.',
    stack: [
      {name: "Next.Js"},
      {name: "Typescript"},
      {name : "Prisma"}
    ],
    image: "/assets/projects/quizzma.png",
    live: "",
    github: ""
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'TypingTest',
    description: "A dynamic web application built to challenge and enhance typing skills. Features include multi-language support (English and Portuguese), adjustable difficulty levels, real-time speed and accuracy tracking, and a clean, responsive design developed with TypeScript, Next.js, and Tailwind CSS.",
    stack: [
      {name: "Next.Js"},
      {name: "Typescript"},
    ],
    image: "/assets/projects/typingtest.png",
    live: "",
    github: ""
  }
]



const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='h1 leading-none font-semibold text-blue-500'>{project.title}</div>
              <h2 className='xl:text-[38px] text-[18px] leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize'>{project.category} Project </h2>
              <p className='text-white/80'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text-blue-500 text-xl'>{item.name} {index !== project.stack.length - 1 && ","}</li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-blue-500'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-blue-500'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div  className='w-full xl:w-[50%] '>
            <Swiper spaceBetween={30}
             slidesPerView={1} 
             className='xl:'
             onSlideChange={handleSlideChange}
             >{projects.map((project, index) => {
              return <SwiperSlide 
              key={index} 
              className='w-full'>
                <div className='h-[460px] relative group flex justify-center items-center bg-blue-950/20'>
                { /* Overlay */ }
                  <div>

                  </div>
                { /* Image */}
                  <div>
                    <Image src={project.image} fill className='object-cover' alt=''>
                    
                    </Image>
                  </div>
                </div>
                </SwiperSlide>;
            })}</Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects