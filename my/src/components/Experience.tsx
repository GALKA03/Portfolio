"use client"
import { SectionHeading } from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useInViewHook } from "@/lib/hooks";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme-context";


export function Experience() {
    const { theme } = useTheme();
    const { ref } = useInViewHook("Experience");
    

  return (
    <section id="experience" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map(({title, location, description,icon, date}, index) => (
        
               <VerticalTimelineElement  key={index}
  contentStyle={{
    background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    padding: "1.3rem 2rem",
  }}
  contentArrowStyle={{
    borderRight:
      theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
  }}
  date={date}
  icon={icon}
  iconStyle={{
    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
    fontSize: "1.5rem",
  }}
>
  <h3>{title}</h3>
  <p>{location}</p>
  <p>{description}</p>
</VerticalTimelineElement>

       ))}
      </VerticalTimeline>
    </section>
  );
}
