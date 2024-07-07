import { IoCodeWorking, IoLaptopOutline } from "react-icons/io5";
import { TracingBeam } from "../ui/tracing-beam";
import { FaGraduationCap } from "react-icons/fa6";

const experiencesData = [
  {
    title: "Computer-Science Degree",
    location: "Pune, India",
    organization: "Pune University",
    description:
      "I am nearing the completion of my computer engineering degree, currently in the final year. ",
    icon: <FaGraduationCap className="w-[40px] h-[40px]" />,
    date: "2021- present",
  },
  {
    title: "Front-End Developer Intern",
    location: "Mumbai, India",
    organization: "Prodigy Infotech",
    description:
      "During my internship as a Front-end Developer at a Mumbai-based company, I had the opportunity to apply the React skills I acquired from YouTube tutorials in real-world projects. I actively contributed to the creation of their main webpage, gaining valuable hands-on experience in web development.",
    icon: <IoCodeWorking className="w-[40px] h-[40px]" />,
    date: "May 2023 - July 2023",
  },
  {
    title: "Freelance Front-End Developer",
    location: "Remote",
    organization: "Self-Employed",
    description:
      "As a freelance front-end developer, I specialize in creating dynamic and visually appealing landing pages. My work involves using modern technologies to deliver responsive and user-friendly designs that help businesses enhance their online presence.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Ongoing",
  },
] as const;

export default function Experience() {
  return (
    <div className="mt-[200px] flex items-center flex-col justify-center">
      <h1 className="font-bold text-3xl">My experience</h1>
      <div className="max-w-[1050px]">
        <TracingBeam className=" sm:flex hidden">
          <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
            <div className="flex flex-col gap-10 max-w-[900px]">
              {experiencesData.map((items, index) => (
                <div className="flex gap-3" key={index}>
                  <div className="w-[50px] h-[50px] rounded-full dark:bg-gray-800 bg-gray-100 shadow-md border sm:flex hidden items-center justify-center dark:text-white text-black ">
                    {items.icon}
                  </div>

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

        <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 sm:hidden ">
          <div className="flex flex-col gap-10 max-w-[900px]">
            {experiencesData.map((items, index) => (
              <div className="flex gap-3" key={index}>
                <div className="w-[50px] h-[50px] rounded-full dark:bg-gray-800 bg-gray-100 shadow-md border flex items-center justify-center dark:text-white text-black">
                  {items.icon}
                </div>

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
    </div>
  );
}
