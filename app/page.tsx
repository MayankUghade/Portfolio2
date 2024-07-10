import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/ContactMe/contact";
import Experience from "@/components/Experience/Experience";
import { Home } from "@/components/Home";
import Myprojects from "@/components/Projects/MyProjects";

export default function Page() {
  return (
    <div className="p-5 lg:container">
      <Home />
      <AboutMe />
      <Myprojects />
      <Experience />
      <Contact />
    </div>
  );
}
