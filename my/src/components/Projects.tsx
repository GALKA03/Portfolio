"use client";
import { SectionHeading } from "./section-heading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";

import { useInViewHook } from "@/lib/hooks";

export function Projects() {
  const { ref } = useInViewHook("Projects");

  return (
    <section  ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
