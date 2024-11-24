import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2022 - 2026
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] pl-4 pb-8 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Undergraduate Informatics Engineering, <br /> Institut Teknologi
              Sumatera (ITERA)
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              I am currently studying Informatics Engineering at Institut
              Teknologi Sumatera in Bandar Lampung. Through this program, I am
              learning both the basics and practical skills in computer science
              to support my journey as a Software Engineer and Web Developer.
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.4}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            June 2019 - April 2022
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.4}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] pl-4 pb-8 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Senior High School, <br /> Islamic IT AR-RAIHAN High School
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              I completed my senior high school education at Islamic IT
              AR-RAIHAN High School, where I developed a strong foundation in
              academics and a passion for technology, which inspired me to
              pursue a career in Software Engineering and Web Development.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
