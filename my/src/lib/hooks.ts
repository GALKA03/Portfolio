import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useActiveContext } from "@/context/active-context";
import type{ SectionName } from "./types";


// type useInViewProps= {
//     sectionName: SectionName
// }

export function useInViewHook(sectionName: SectionName) {
    const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveContext();

  useEffect(() => {
   if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
    return {
        ref,
    }
}
