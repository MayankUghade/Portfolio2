import AboutMe from "@/components/About-me";
import Home from "@/components/Home";
import Divider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Contact from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="p-5 lg:container">
      <Home />
      <Divider />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
