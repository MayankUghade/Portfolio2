import ProjectCard from "@/components/Projects/Projectcard";

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
    title: "Cryptic",
    description:
      "A cool and simple application where people can read about important cryptio news and make sure they are connected with the crypto. also as this was my vry first project, it is not mobile responsive",
    tags: ["React", "Rapid API"],
    githubLink: "https://github.com/MayankUghade/CRYPTIC",
    liveLink: "https://cryptic-three.vercel.app/",
    imageUrl: "/cryptic.png",
  },
  {
    title: "Sidekick (still working on it)",
    description:
      "SideKick is a cool social media platform for discovering, collaborating on, rating side projects, connecting with like minded individuals around the globe for feedback and growth.",
    tags: [
      "React",
      "Next-Js",
      "Kinde Auth",
      "postgre sql",
      "Prisma",
      "Acternity UI",
    ],
    githubLink: "https://github.com/MayankUghade/SideKick",
    liveLink: "",
    imageUrl: "/sidekick.png",
  },
];
export default function page() {
  return (
    <div className="lg:container p-3 flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-semibold underline"> More of my projects</h1>
      <div className="flex gap-5 flex-wrap items-center justify-center mt-10">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
    </div>
  );
}
