"use client";

import { DownloadIcon, MoveRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="sm:p-5 p-3 flex flex-col sm:gap-9 gap-5">
      <motion.div
        className="flex flex-col sm:gap-5 gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.115 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          Hello👋, I'm Mayank.{" "}
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          I'm a{" "}
          <span className="font-bold underline">full-stack developer</span> with
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          <span className="font-bold">2 years</span> of experience & I love
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          building cool{" "}
          <span className="font-bold underline">Web application</span>
        </h1>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap lg:gap-5 gap-3 items-center lg:mt-5 lg:ml-5 ml-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.124 }}
      >
        <div className="flex cursor-pointer items-center gap-3 lg:text-lg md:text-md sm:text-sm text-xs lg:px-8 lg:py-4 px-3 py-2 font-semibold rounded-lg bg-black/80 text-white">
          Contact me here
          <MoveRightIcon />
        </div>

        <a className="flex cursor-pointer items-center gap-3 lg:text-lg md:text-md sm:text-sm text-xs lg:px-8 lg:py-4 px-3 py-2  font-semibold rounded-lg dark:bg-gray-300/20 bg-gray-600/20 dark:text-white text-black">
          Download cv
          <DownloadIcon />
        </a>

        <section className="flex gap-3">
          <div className="rounded-lg lg:px-5 lg:py-3 px-3 py-2 cursor-pointer dark:bg-gray-300/20 dark:text-white bg-gray-700/20 text-black">
            <LinkedInLogoIcon className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" />
          </div>

          <div className="rounded-lg lg:px-5 lg:py-3 px-3 py-2 cursor-pointer dark:bg-gray-300/20 dark:text-white bg-gray-700/20">
            <FaSquareXTwitter className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" />
          </div>

          <div className="rounded-lg lg:px-5 lg:py-3 px-3 py-2 cursor-pointer dark:bg-gray-300/20 dark:text-white bg-gray-700/20">
            <FaSquareGithub className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" />
          </div>
        </section>
      </motion.div>
    </section>
  );
}
