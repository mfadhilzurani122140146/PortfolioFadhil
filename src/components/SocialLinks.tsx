import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    {
      name: "Instagram",
      link: "https://instagram.com/fadhil.zurani/",
      icon: <Instagram />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@miawdiff",
      icon: <Youtube />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/muhammad-fadhil-zurani/",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://linktr.ee/miawdiff",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
