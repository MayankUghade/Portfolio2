"use client";

import { useActiveSectionContext } from "@/context/active-section";
import ProjectCard from "./Project-card";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export const projectsData = [
  {
    title: "Dev-Union",
    description:
      "Dev Union is a Full Stack application that allows users to establish chat rooms and cooperate on cool projects with strangers. This project integrates real-time video call capabilities alongside captivating screen-sharing functionalities.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    githubLink: "https://github.com/MayankUghade/Code-Together",
    liveLink: "https://dev-union.vercel.app/",
    imageUrl: "/dev-union.png",
  },
  {
    title: "NewsNugget",
    description:
      "NewsNugget is a neat AI tool that condenses Times of India articles into 60-word summaries. Powered by HuggingFace AI, it simplifies the news for you on the fly! Perfect for staying updated on the go without sifting through lengthy articles.",
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
      "BidMaster is a project showcasing an online bidding platform. Users can effortlessly place bids and list products, experiencing seamless transactions and competitive bidding in a user-friendly environment.",
    tags: ["React", "Next.js", "Tailwind", "Kinde Auth"],
    githubLink: "https://github.com/MayankUghade/BidMaster",
    liveLink: "https://bid-master.vercel.app/",
    imageUrl: "/BidMaster.png",
  },
  {
    title: "Epic-Energize",
    description:
      "Epic-Energize is a fitness app designed to kickstart your fitness journey with its extensive exercise database. It's built with rapidAPI integration, offering a wide range of workouts in a structured format to guide your progress effectively.",
    tags: ["React", "Tailwind", "RapidAPI"],
    githubLink: "https://github.com/MayankUghade/Epic-Energize",
    liveLink: "https://epic-energize.vercel.app/",
    imageUrl: "/epic-energize.png",
  },
] as const;

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center py-[120px] gap-9 scroll-mt-26"
      id="projects"
    >
      <h1 className="text-center font-bold text-3xl">My projects</h1>

      <div className="flex flex-wrap items-center justify-center gap-7 p-3 w-full">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
