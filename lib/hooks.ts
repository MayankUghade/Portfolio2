import { links } from "@/components/Navbar";
import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type sectionNameProps = (typeof links)[number]["name"];

export function useSectionInView(
  sectionName: sectionNameProps,
  threshold: number
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);

  return {
    ref,
  };
}
