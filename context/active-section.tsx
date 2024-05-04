"use client";

import { links } from "@/components/Navbar";
import { createContext, useContext, useState } from "react";

type sectionNames = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: sectionNames;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionNames>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<sectionNames>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
