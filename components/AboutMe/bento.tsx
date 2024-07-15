import React from "react";
import { Location } from "./Location";
import {
  FaBookBookmark,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { GrGithub, GrMailOption } from "react-icons/gr";
import MarqueeDemo from "./Skills";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface BentoItem {
  id: number;
  size: string;
  component: React.ReactNode;
}

const bentoItems: BentoItem[] = [
  {
    id: 1,
    size: "md:w-1/2 w-full",
    component: (
      <div className="p-2">
        <div className="flex items-center gap-1  mt-2">
          <FaLocationDot />
          <h1 className="text-sm text-gray-400">
            Navigating the world of tech
          </h1>
        </div>
        <Location />
      </div>
    ),
  },
  {
    id: 2,
    size: "md:w-1/2 w-full",
    component: (
      <div className="flex flex-col gap-5 p-5 mr-auto sm:mr-5">
        <div className=" md:mt-[-30px] md:mr-[200px] flex items-center gap-2 ">
          <FaLink className="text-xl" />
          <h1 className=" text-sm text-gray-400">Connect with me</h1>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <Link
            href="https://github.com/MayankUghade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GrGithub className="md:text-3xl text-2xl" />
            <h1 className="text-sm">Github</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mayank-ughade-63aab7229/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedin className="md:text-3xl text-2xl" />
            <h1 className="text-sm">LinkedIn</h1>
          </Link>
          <Link
            href="https://x.com/MayankUghade3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaTwitter className="md:text-3xl text-2xl" />
            <h1 className="text-sm">Twitter</h1>
          </Link>
          <Link
            href="https://www.instagram.com/mayank_ughade/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram className="md:text-3xl text-2xl" />
            <h1 className="text-sm">Instagram</h1>
          </Link>
          <Link
            href="mailto:mayank14ughade@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GrMailOption className="md:text-3xl text-2xl" />
            <h1 className="text-sm">Mail</h1>
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    size: "md:w-2/3 w-full h-64",
    component: (
      <div className="relative overflow-hidden w-[300px] sm:w-[450px] md:w-[500px] lg:w-full">
        <MarqueeDemo />
      </div>
    ),
  },
  {
    id: 4,
    size: "md:w-1/3 w-full h-64",
    component: (
      <div className="flex flex-col w-full h-full p-5">
        <div className="flex items-center gap-2 mb-10">
          <FaBookBookmark />
          <h1 className="text-sm text-gray-400">Currently Learning</h1>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src="/golang.png"
            alt="current learning"
            width={200}
            height={200}
          />
        </div>
      </div>
    ),
  },
];

const BentoGrid: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-wrap sm:w-[1000px] gap-2 mt-10">
      <h1 className="sm:text-4xl text-xl font-semibold sm:mb-5">About me</h1>
      <div className="flex flex-col md:flex-row w-full gap-2">
        {bentoItems.slice(0, 2).map((item) => (
          <div key={item.id} className={`p-2 ${item.size}`}>
            <div
              className={`h-full rounded-lg flex items-center justify-center border`}
            >
              {item.component}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2">
        {bentoItems.slice(2, 4).map((item) => (
          <div key={item.id} className={`p-2 ${item.size}`}>
            <div
              className={`h-full rounded-lg flex items-center justify-center border`}
            >
              {item.component}
            </div>
          </div>
        ))}
      </div>
      <Link href="/about_me">
        <Button>More About Me</Button>
      </Link>
    </div>
  );
};

export default BentoGrid;
