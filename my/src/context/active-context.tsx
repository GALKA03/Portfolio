"use client";
import { links } from "@/lib/data";
import { useState, createContext, useContext } from "react";
import type { SectionName, ActiveContextType, ActiveContextProviderProps } from "@/lib/types";

// type SectionName = (typeof links)[number]["name"];
// type ActiveContextProviderProps = {
//   children: React.ReactNode;
// };
// type ActiveContextType = {
//   activeSection: SectionName;
//   setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
//   timeOfLastClick: number;
//   setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
// };

export const ActiveContext = createContext<ActiveContextType | null>(null);

export default function ActiveContextProvider({
  children,
}: ActiveContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
 
 
 
    return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

export function useActiveContext() {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error(
      "useActiveContext must be used within an ActiveContextProvider"
    );
  }

  return context;
}
