import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import business from "@/public/collage1.jpg";
import iceCream from "@/public/collage2.jpg";
import gardenApp from "@/public/collage3.jpg";
import wallet from "@/public/collage4.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated GO-IT academy",
    location: "Ukraine, Kyiv",
    description:
      "I graduated after 12 months of studying. I started working as a freelancer while still a student at the academy.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    description: "freelance",
    date: "2022 - present",

    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Full-Stack Developer",
    description: "freelance",
    date: "2022 - present",
    icon: React.createElement(FaReact),
  },
] as const;

export const projectsData = [
  {
    title: "Webstudio",
    description:
      "My first big layout work using such technologies with responsive design",
    tags: ["HTML", "CSS"],
    imageUrl: wallet,
  },
  {
    title: "Icecream",
    description:
      "layout for an ice cream business. I use responsive design. Build project on github, check for build errors and live page performance.",
    tags: ["HTML", "SASS", "Parcel"],
    imageUrl: iceCream,
  },
  {
    title: "Filmoteka",
    description: "Application for choosing a movie.",
    tags: ["HTML", "SASS", "Parcel", "JS", "REST API", "Axios"],
    imageUrl: wallet,
  },
  {
    title: "Movies library",
    description:
      "Library for searching different films. On the main page you can watch popular movies.",
    tags: ["React", "REST API", "Axios", "CSS", "WebPack"],
    imageUrl: wallet,
  },
  {
    title: "Wallet ",
    description:
      "Full-Stack application for save money and with different another functions.",
    tags: [
      "React",
      "REST API",
      "Axios",
      "CSS",
      "WebPack",
      "React Router",
      "Redux",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Responsive design",
    ],
    imageUrl: wallet,
  },
  {
    title: "Business project",
    description:
      "Multi-page application for business. At the Italian language.",
    tags: ["Next.js", "TailwindCss", "SASS", "webPack", "Responsive design"],

    imageUrl: business,
  },
  {
    title: "ToDo list",
    description:
      "An application where you can add tasks, change it, update it and move elsewhere. With registration and login.",
    tags: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Eslint",
      "Formik",
      "Node.js",
      "Sequelize-typescript",
      "PosgreSQL",
      "Responsive design",
    ],

    imageUrl: wallet,
  },
  {
    title: "Delivery",
    description:
      "An application in which you can select a restaurant and order delivery, with cash payment. You can use the user role, the administrator role, or simply view products. The application is in the process of finalizing the design and payment system.",
    tags: [
      "Next.js",
      "NextAuth",
      "Redux",
      "Formik",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Responsive design",
    ],

    imageUrl: wallet,
  },
  {
    title: "Garden",
    description: "App layout with js elements.",
    tags: ["JS", "TailwindCss", "Responsive design"],
    imageUrl: gardenApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Responsive design",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "REST API",
  "Mongoose",
  "Sequelize",
  "Redux",
  "Material UI",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
