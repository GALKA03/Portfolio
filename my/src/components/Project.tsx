"use client"
import React, { useRef } from "react";
import Image from "next/image";
import {  motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

// type ProjectProps = {
//     title: string,
//     description: string,
//     imageUrl:,
//     tags:string
// }
type ProjectProps = (typeof projectsData)[number];
// props
export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref= useRef<HTMLDivElement>(null)
    const {scrollYProgress, scrollXProgress} =useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
})
 const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
        ref={ref}
         style={{
              scale: scaleProgess,
              opacity:opacityProgess
            }}
            className="group even:pl-8 mb-3 sm:mb-8 last:mb-0 "
        >
      <section  className="  bg-[#a9da5528] max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-[#a9da5564] transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
         
      >
      <div className=" py-6 sm:pl-10 sm:pr-2 group-even:ml-[18rem] sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4  gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-8 -right-40 w-[30.55rem] rounded-t-lg shadow-2xl
          transition 
        group-hover:scale-[1.05]
        group-hover:-translate-x-4
        group-hover:translate-y-4
        group-hover:-rotate-2

        group-even:group-hover:translate-x-4
        group-even:group-hover:translate-y-4
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
                </div>
                
            </section>
            </motion.div>
            
  );
}