"use client";

import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <header className="navbar-wrapper fixed top-0 w-full bg-opacity-90 backdrop-blur-lg z-50">
      <motion.div
        className="p-5 flex items-center justify-center h-20 sm:gap-7 gap-3 flex-wrap"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="cursor-pointer text-sm sm:text-lg dark:hover:bg-gray-800 hover:bg-gray-300 bg-opacity-20 px-2 py-1 rounded-full">
          Home
        </h1>
        <h1 className="cursor-pointer text-sm sm:text-lg dark:hover:bg-gray-800 hover:bg-gray-300 bg-opacity-20 px-2 py-1 rounded-full">
          About
        </h1>
        <h1 className="cursor-pointer text-sm sm:text-lg dark:hover:bg-gray-800 hover:bg-gray-300 bg-opacity-20 px-2 py-1 rounded-full">
          Projects
        </h1>
        <h1 className="cursor-pointer text-sm sm:text-lg dark:hover:bg-gray-800 hover:bg-gray-300 bg-opacity-20 px-2 py-1 rounded-full">
          Experience
        </h1>
        <h1 className="cursor-pointer text-sm sm:text-lg dark:hover:bg-gray-800 hover:bg-gray-300 bg-opacity-20 px-2 py-1 rounded-full">
          Skills
        </h1>
        <h1 className="cursor-pointer text-sm sm:text-lg dark:hover:bg-gray-800 hover:bg-gray-300 bg-opacity-20 px-2 py-1 rounded-full">
          Contact
        </h1>
      </motion.div>
    </header>
  );
}
