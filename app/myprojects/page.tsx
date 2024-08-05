"use client";

import ProjectCard from "@/components/Projects/Projectcard";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Dev-Union",
    description:
      "Dev Union is a full-stack app enabling users to create chat rooms and collaborate on projects with real-time video calls and screen-sharing.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    githubLink: "https://github.com/MayankUghade/Code-Together",
    liveLink: "https://dev-union.vercel.app/",
    imageUrl: "/dev-union.png",
  },
  {
    title: "InsightFul",
    description:
      "InsightFul is a fullstack tool that helps saas developers collect valuable user feedback and insights to improve your product and delight your customers. This tool makes sure you can collect feedback at one place.",
    tags: ["React", "Next.js", "Tailwind", "Next-Auth", "MongoDB", "Prisma"],
    githubLink: "https://github.com/MayankUghade/InsightFul",
    liveLink: "https://insightful-two.vercel.app/",
    imageUrl: "/insightful.png",
  },
  {
    title: "NewsNugget",
    description:
      "NewsNugget, powered by HuggingFace AI, condenses Times of India articles into 60-word summaries for quick and easy updates.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "HuggingFace AI",
    ],
    githubLink: "https://github.com/MayankUghade/NewsNugget",
    liveLink: "https://news-nugget.vercel.app/",
    imageUrl: "/news-nugget.png",
  },
  {
    title: "BidMaster",
    description:
      "BidMaster is an online platform for seamless transactions, allowing users to place bids and list products effortlessly.",
    tags: ["React", "Next.js", "Tailwind", "Kinde Auth"],
    githubLink: "https://github.com/MayankUghade/BidMaster",
    liveLink: "https://bid-master.vercel.app/",
    imageUrl: "/BidMaster.png",
  },
  {
    title: "Epic-Energize",
    description:
      "Epic-Energize is a fitness app with a comprehensive exercise database and rapidAPI integration, providing structured workouts",
    tags: ["React", "Tailwind", "RapidAPI"],
    githubLink: "https://github.com/MayankUghade/Epic-Energize",
    liveLink: "https://epic-energize.vercel.app/",
    imageUrl: "/epic-energize.png",
  },
  {
    title: "Aniwave",
    description:
      "An easy-to-use anime app built with Next.js, fetching data from the Jikan API to provide up-to-date information on your favorite shows and characters.",
    tags: ["React", "Next-Js", "Tailwind", "JikanAPI", "ShadCn-UI"],
    githubLink: "https://github.com/MayankUghade/Aniwave",
    liveLink: "https://aniwave.vercel.app/",
    imageUrl: "/aniwave.png",
  },
  {
    title: "Permitech Landing page",
    description:
      "A sleek and engaging freelance landing page featuring cool animations to captivate visitors and showcase your portfolio effectively.",
    tags: [
      "React",
      "Next-Js",
      "Tailwind",
      "Aceternity-UI",
      "ShadCn-UI",
      "Magic-UI",
    ],
    githubLink: "https://github.com/MayankUghade/permitech",
    liveLink: "https://permitech.vercel.app/",
    imageUrl: "/permitech.png",
  },
  {
    title: "WorkFlow",
    description:
      "Workflow is a powerful task management application that helps you and your team stay organized and productive.This application contains drag and drop feature that allows user to change the status of the project as well. ",
    tags: ["React", "Next-Js", "Kinde Auth", "postgre sql", "Prisma"],
    githubLink: "https://github.com/MayankUghade/work-flow",
    liveLink: "https://workflow-2.vercel.app/",
    imageUrl: "/workflow.png",
  },
];
export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="lg:container p-3 flex flex-col items-center justify-center mt-10"
    >
      <h1 className="text-3xl font-semibold underline"> More of my projects</h1>
      <div className="flex gap-5 flex-wrap items-center justify-center mt-10">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
    </motion.div>
  );
}
