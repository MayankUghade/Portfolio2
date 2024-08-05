"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./Projectcard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const projectsData = [
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
    title: "InsightFul",
    description:
      "InsightFul is a fullstack tool that helps saas developers collect valuable user feedback and insights to improve your product and delight your customers. This tool makes sure you can collect feedback at one place.",
    tags: ["React", "Next.js", "Tailwind", "Next-Auth", "MongoDB", "vercel"],
    githubLink: "https://github.com/MayankUghade/InsightFul",
    liveLink: "https://insightful-two.vercel.app/",
    imageUrl: "/insightful.png",
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
] as const;

export default function Myprojects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center mt-[200px]"
    >
      <h1 className="text-4xl font-bold mb-7">My Projects</h1>

      <div className="flex flex-wrap gap-5 items-center justify-center ">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
      <Button className="mt-3" asChild>
        <Link href="/myprojects">More Projects</Link>
      </Button>
    </motion.div>
  );
}
