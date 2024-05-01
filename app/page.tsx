import AboutMe from "@/components/About-me";
import Home from "@/components/Home";
import Divider from "@/components/SectionDivider";

export default function Page() {
  return (
    <div className="p-5 lg:container">
      <Home />
      <Divider />
      <AboutMe />
    </div>
  );
}
