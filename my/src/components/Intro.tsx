"use client";
import Image from "next/image";
import portret from "@/../public/myphoto2.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";

export function Intro() {
  return (
    <section id="home" className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portret}
              width="200"
              height="200"
              alt="my photo"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-green-100 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Galya.</span>I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">more than 1 year</span> of experience. I
        enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React(Next.js), Node.js</span>. I am a fast
        learner, responsible.
      </motion.h1>
      <motion.div
        className="flex flex-col justify-center gap-2 items-center px-4 text-lg sm:flex-row"
        initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
              delay: 0.1,
              duration: 0.7,
            }}
      >
        <Link
          href="#contact"
          className="group bg-white border-2 border-[#f4353564] text-gray-900 font-bold rounded-full px-7 py-3 flex justify-center items-center gap-2 hover:scale-110 active:scale-105  focus:scale-110 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href=""
          className="bg-[#f4353564] border-2 border-white text-white font-bold rounded-full px-7 py-3 flex justify-center items-center gap-2  hover:scale-110 active:scale-105  focus:scale-110 transition "
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        <a
          href="https://www.linkedin.com/in/galya-matviienko-817662254/" target="_blank"
          className="bg-white  text-blue-700 font-bold rounded-full text-[1.35rem] p-4 flex items-center gap-2"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/GALKA03" target="_blank"
          className="bg-white  text-black font-bold rounded-full text-[1.35rem] p-4 flex items-center gap-2"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
