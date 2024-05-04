"use client";

import { useActiveSectionContext } from "@/context/active-section";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Navbar() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  return (
    <header className=" p-1 navbar-wrapper fixed top-0 w-full bg-opacity-90 backdrop-blur-lg z-50">
      <motion.div
        className="p-5 flex items-center justify-center h-20 sm:gap-7 gap-3 flex-wrap"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.hash}
            className={`cursor-pointer text-sm sm:text-lg ${
              activeSection === link.name
                ? "font-semibold dark:text-black text-white"
                : ""
            } px-3 py-1 rounded-full relative`}
            onClick={() => setActiveSection(link.name)}
          >
            {link.name}
            {link.name === activeSection && (
              <motion.span
                className="dark:bg-gray-100/60 bg-gray-800/60 rounded-full absolute inset-0 -z-10"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </Link>
        ))}
      </motion.div>
    </header>
  );
}
