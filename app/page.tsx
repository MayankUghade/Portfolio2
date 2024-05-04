import AboutMe from "@/components/About-me";
import Home from "@/components/Home";
import Divider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";

export default function Page() {
  return (
    <div className="p-5 lg:container">
      <Home />
      <Divider />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}
