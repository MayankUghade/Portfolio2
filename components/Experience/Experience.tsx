"use client";
import { IoCodeWorking, IoLaptopOutline } from "react-icons/io5";
import { TracingBeam } from "../ui/tracing-beam";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiencesData = [
  {
    title: "SDE Intern",
    location: "Bangalore, India",
    organization: "The Product Highway",
    description:
      "Developed Mahindra electric cars' landing page & booking platform, increasing user engagement. Built Meta Ads data scraping engine for SaaS platform, automating data collection process. Created full-stack customer management system using NestJS, reducing response time by 60%.",
    icon: <IoCodeWorking className="w-[40px] h-[40px]" />,
    date: "Oct 2024 - Present",
  },
  {
    title: "Fullstack Developer",
    location: "Delhi, India",
    organization: "Zapllo Software",
    description:
      "Built responsive landing page with animated components, improving mobile traffic by 35%. Implemented employee management APIs using Node.js, handling 1000+ daily requests. Created reusable Next.js components, resulting in reduction of development time.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Aug 2024 - Sept 2024",
  },
  {
    title: "Frontend Developer",
    location: "Gurgaon, India",
    organization: "Stealth Startup",
    description:
      "Built SaaS UI with Next.js, to achieve high user satisfaction rate. Integrated Google Drive API for secure file management system. Implemented SHA-based file encryption for enhanced security.",
    icon: <IoCodeWorking className="w-[40px] h-[40px]" />,
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Computer-Science Degree",
    location: "Pune, India",
    organization: "Pune University",
    description:
      "I am nearing the completion of my computer engineering degree, currently in the final year. ",
    icon: <FaGraduationCap className="w-[40px] h-[40px]" />,
    date: "2021- present",
  },
] as const;

export default function Experience() {
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
      className="mt-[200px] flex items-center flex-col justify-center scroll-mt-28"
      id="experience"
    >
      <h1 className="font-bold text-3xl">My experience</h1>
      <div>
        <TracingBeam className="sm:flex hidden">
          <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
            <div className="flex flex-col gap-10 max-w-[900px]">
              {experiencesData.map((items, index) => (
                <div key={index}>
                  <div className=" p-5 w-full border rounded-lg">
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
                </div>
              ))}
            </div>
          </section>
        </TracingBeam>

        <section className="w-full flex sm:hidden flex-col gap-10 items-center justify-center scroll-mt-28 py-[30px] ">
          <div className="flex flex-col gap-10 max-w-[900px]">
            {experiencesData.map((items, index) => (
              <div key={index}>
                <div className=" p-5 w-full border rounded-lg">
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
