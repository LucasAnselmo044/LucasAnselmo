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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius doloribus deleniti",
    stack: [
      {name: "Next.Js"},
      {name: "Typescript"},
      {name : "Prisma"}
    ],
    image: "/assets/projects/quizzma.png"
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'TypingTest',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius doloribus deleniti",
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
  return (
    <div>Projects</div>
  )
}

export default Projects