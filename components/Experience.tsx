"use client";

import { useSectionInView } from "@/lib/hooks";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const experiencesData = [
  {
    title: "Computer-Science Degree",
    location: "Pune, India",
    organization: "Pune University",
    description:
      "I am nearing the completion of my computer engineering degree, currently in the final year. ",
    icon: <LuGraduationCap className="w-[40px] h-[40px]" />,
    date: "2021- present",
  },
  {
    title: "Front-End Developer Intern",
    location: "Mumbai, India",
    organization: "Prodigy Infotech",
    description:
      "During my internship as a Front-end Developer at a Mumbai-based company, I had the opportunity to apply the React skills I acquired from YouTube tutorials in real-world projects. I actively contributed to the creation of their main webpage, gaining valuable hands-on experience in web development.",
    icon: <CgWorkAlt className="w-[40px] h-[40px]" />,
    date: "May 2023 - July 2023",
  },
] as const;

const slideAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 mb-28 sm:mb-40 py-[80px]"
    >
      <h1 className="font-bold text-3xl">My experience</h1>

      <div className="flex flex-col gap-10 max-w-[900px]">
        {experiencesData.map((items, index) => (
          <motion.div
            className="flex gap-3"
            variants={slideAnimationVariants}
            initial="initial"
            whileInView="animate"
            key={index}
            custom={index}
          >
            <div className="w-[50px] h-[50px] rounded-full dark:bg-gray-800 bg-gray-100 shadow-md border flex items-center justify-center dark:text-white text-black">
              {items.icon}
            </div>

            <div className="dark:bg-gray-800 bg-gray-100 shadow-md dark:text-white text-black p-5 w-full border rounded-lg">
              <h1 className="font-semibold text-2xl capitalize">
                {items.title}
              </h1>
              <p className="font-normal mt-2">{items.location}</p>
              <p className="font-normal mt-1">{items.organization}</p>
              <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                {items.description}
              </p>

              <p className="font-normal mt-5">{items.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
