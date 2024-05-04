import ProjectCard from "./Project-card";
import React from "react";

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
    title: "AniWave",
    description:
      "Anivewave is a straightforward anime app designed to help you find your beloved anime series and manga. It utilizes the JIKAN API integrated with Next.js to deliver a delightful user experience. It's a user-friendly application built around a simple API",
    tags: ["React", "Next.js", "Tailwind", "Jikan API"],
    githubLink: "https://github.com/MayankUghade/Aniwave",
    liveLink: "https://aniwave.vercel.app/",
    imageUrl: "/aniwave.png",
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
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 gap-9">
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
