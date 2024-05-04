"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";

export default function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      className="w-full p-3 flex flex-col gap-5 items-center justify-center mt-5 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.155 }}
      id="about"
    >
      <h1 className="font-bold text-3xl"> About Me</h1>
      <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
        <p className="md:w-[45%] text-left sm:text-lg text-sm">
          In a nutshell, I'm{" "}
          <span className="font-bold underline">Mayank Ughade</span>, a
          dedicated{" "}
          <span className="font-bold underline">full-stack developer</span> with
          a fervor for problem-solving and crafting exceptional web
          applications. My TechStack is{" "}
          <span className="font-bold underline">React.js</span>,{" "}
          <span className="font-bold underline">Next.js</span>,{" "}
          <span className="font-bold underline">Node.js</span>, and{" "}
          <span className="font-bold underline">MongoDB</span>, enabling me to
          architect cool web-applications with modern features. I'm also
          proficient in utilizing{" "}
          <span className="font-bold underline">relational databases </span>
          alongside ORMs such as {""}
          <span className="font-bold underline">Prisma</span>, and I have
          experience working with{" "}
          <span className="font-bold underline">TypeScript</span>. Currently in
          pursuit of a full-time role where I can leverage my skills to
          contribute meaningfully to impactful projects and collaborate with
          like-minded professionals.
          <br />
          Outside of development, you'll often find me{" "}
          <span className="font-bold underline">swimming</span>,{" "}
          <span className="font-bold underline">enjoying music</span>,{" "}
          <span className="font-bold underline">playing video games</span> and{" "}
          <span className="font-bold underline">learning new stuff</span>. These
          moments of relaxation fuel my creativity and keep me balanced,
          ensuring I approach both work and life with enthusiasm and
          perspective.
        </p>

        <div className="md:w-[40%] w-[100%] md:h-[300px] h-[200px] ml-5 relative">
          <Image
            src="./about_me.svg"
            alt="Image"
            objectFit="cover"
            fill
            quality={95}
          />
        </div>
      </div>
    </motion.div>
  );
}
