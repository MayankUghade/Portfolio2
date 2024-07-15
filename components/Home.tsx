"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/button";
import { FaCircle, FaDownload } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import { HoverBorderGradient } from "./ui/border-hover";
import Link from "next/link";
import { motion } from "framer-motion";

export function Home() {
  return (
    <section className="relative flex items-center justify-center rounded-md bg-background/[0.96] py-16 md:py-48">
      <Spotlight
        className="z-10 -top-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex flex-col items-center gap-4 sm:mt-[-70px]"
      >
        <HoverBorderGradient className="flex items-center gap-2 text-sm">
          <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
          Available for work
        </HoverBorderGradient>
        <div className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Mayank Ughade
        </div>
        <div className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Full-Stack Developer
        </div>
        <p className="text-gray-400 text-center text-xs sm:text-sm">
          I am passionate about crafting innovative fullstack web applications,
          <br />
          merging creativity and functionality to deliver exceptional user
          experiences.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex flex-col sm:flex-row sm:gap-5 gap-2 items-center"
        >
          <Button asChild>
            <Link
              href="/Mayank_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="mr-2" />
              Download My Resume
            </Link>
          </Button>
          <Button>
            <GrContactInfo className="mr-2 text-xl" />
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
