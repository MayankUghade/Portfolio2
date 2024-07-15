"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import SmallNav from "./RetractableNav";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ ease: "easeOut", duration: 0.5 }}
      className="border-b bg-black z-50 relative bg-opacity-50 "
    >
      <div className="flex items-center justify-between p-5 lg:container">
        <div className="flex items-center gap-5 ">
          <Link href="/">
            <Image src="/letter-m.png" alt="Logo" width={27} height={27} />
          </Link>
          <div className="sm:flex hidden items-center gap-5">
            <Link
              href="/myprojects"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              Experience
            </Link>
            <Link
              href="/about_me"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              About Me
            </Link>
            <Link
              href="/#contact"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="sm:flex hidden items-center sm:gap-5 gap-3">
          <FaGithub className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
        <SmallNav />
      </div>
    </motion.div>
  );
}
