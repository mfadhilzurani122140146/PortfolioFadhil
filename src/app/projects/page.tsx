import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "UNENLIGHTENED - Pixel Art Game",
      description: `UNENLIGHTENED is a pixel art, top-down adventure game developed using Python. It takes players on an immersive journey through a dark labyrinth filled with monsters and challenges.`,
      tags: ["Python"],
      link: "https://github.com/thebugitself/Unenlightened",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            My projects are a collection of simple and creative ideas as I learn
            and grow in software engineering and web development. Here, I share
            my early projects, each driven by curiosity, dedication, and a
            passion for learning. Every piece reflects my journey of growth and
            discovery. Welcome to my path toward mastering technology!
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
