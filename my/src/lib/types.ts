import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveContextProviderProps = {
  children: React.ReactNode;
};
export type ActiveContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};


