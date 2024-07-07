import { Button } from "../ui/button";
import ProjectCard from "./Projectcard";

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
] as const;

export default function Myprojects() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[200px]">
      <h1 className="text-4xl font-bold mb-7">My Projects</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center ">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
      <Button className="mt-3" variant="outline">
        More Projects
      </Button>
    </div>
  );
}
