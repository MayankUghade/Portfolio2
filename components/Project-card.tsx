"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { useScroll, useTransform } from "framer-motion";

import { projectsData } from "./Projects";
import { useRef } from "react";
import { motion } from "framer-motion";

type projectsProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  githubLink,
  liveLink,
  imageUrl,
}: projectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      ref={ref}
      className="sm:w-[570px] w-[100%] border shadow-md dark:bg-gray-800 bg-gray-100 hover:bg-gray-200 transition-smooth rounded-md p-4 overflow-hidden group"
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="mt-5 text-sm sm:text-md sm:h-[75px]">{description}</p>

      {/* Live link and github project link */}
      <div className="flex items-center gap-3">
        <Link
          href={githubLink}
          className="mt-3 flex items-center gap-1 text-yellow-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="w-[20px] h-[20px]" />
          Github
        </Link>

        <Link
          href={liveLink}
          className="mt-3 flex items-center gap-1 text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBolt className="w-[20px] h-[20px]" />
          Live
        </Link>
      </div>

      {/* used techstack and technologies */}
      <ul className="mt-5 flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="px-3 py-1 rounded-full dark:bg-gray-300 bg-gray-500 w-fit text-xs font-semibold dark:text-black text-white"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* This is the project image */}

      <div className="w-full items-center flex justify-center sm:py-12 mt-3 sm:mb-[-100px] sm:group-hover:-translate-y-10 sm:group-hover:scale-[1.04] transition">
        <Image
          src={imageUrl}
          alt="Project Image"
          width="500"
          height="700"
          quality={90}
          className="rounded-lg shadow-md"
        />
      </div>
    </motion.div>
  );
}
