"use client";

import { IoLogoHtml5, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="w-[25px] h-[25px]" />,
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 className="w-[25px] h-[25px]" />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript className="w-[25px] h-[25px]" />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript className="w-[25px] h-[25px]" />,
  },
  {
    name: "ReactJS",
    icon: <FaReact className="w-[25px] h-[25px]" />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs className="w-[25px] h-[25px]" />,
  },
  {
    name: "NodeJS",
    icon: <IoLogoNodejs className="w-[25px] h-[25px]" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="w-[25px] h-[25px]" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="w-[25px] h-[25px]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-[25px] h-[25px]" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="w-[25px] h-[25px]" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-[25px] h-[25px]" />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="w-[25px] h-[25px]" />,
  },
  {
    name: "Python",
    icon: <IoLogoPython className="w-[25px] h-[25px]" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="w-[25px] h-[25px]" />,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.1);
  return (
    <div
      ref={ref}
      className="w-full sm: flex flex-col items-center justify-center p-2 scroll-mt-28"
      id="skills"
    >
      <h1 className="text-3xl font-bold text-center">My skills</h1>

      <ul className="mt-8 flex items-center justify-center gap-3 flex-wrap max-w-[900px]">
        {skills.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            key={index}
            viewport={{
              once: true,
            }}
            custom={index}
            className="flex items-center justify-center gap-2 sm:px-5 sm:py-3 px-3 py-2 border border-black/15 rounded-sm shadow-sm dark:bg-gray-800 bg-gray-100"
          >
            <div className="flex items-center justify-center gap-2 text-green-500">
              {skill.icon}
            </div>
            <h1 className="sm:text-lg text-sm">{skill.name}</h1>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
