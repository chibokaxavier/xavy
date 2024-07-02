"use client";
import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adip",
  info: [
    {
      fielddName: "Name",
      fieldValue: "Chiboka Emmanuel",
    },
    {
      fielddName: "Phone",
      fieldValue: "(+2348121826916)",
    },
    {
      fielddName: "Experience",
      fieldValue: "3+",
    },
    {
      fielddName: "Eamil",
      fieldValue: "Chibokaxavier@gmail.com",
    },
    {
      fielddName: "Freelance",
      fieldValue: "available",
    },
  ],
};
const experience = {
  icon: "/",
  title: "My Experience",
  description: "",
  items: [
    {
      company: "AroneEnergy",
      position: "FrontEnd Developer (Freelance)",
      duration: "August 2022 - October 2022",
    },
    {
      company: "02 Hero Tech",
      position: "FrontEnd Developer",
      duration: "September 2023 - December 2023",
    },
    {
      company: "De Regal Hall Schools",
      position: "Mathematics nad Physics Facilitator",
      duration: "September 2017 - December 2017",
    },
  ],
};
const education = {
  icon: "/",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "University of Nigeria, Nsukka ",
      degree: "Metallurgical and Materials Engineering",
      duration: "October 2018 - May 202a",
    },
  ],
};
const skills = {
  title: "My Skills",
  skillist: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node js",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue JS",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="mx-auto container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList>
            <TabsTrigger value="tab1">Experience</TabsTrigger>
            <TabsTrigger value="tab2">Skills</TabsTrigger>
            <TabsTrigger value="tab3">Education</TabsTrigger>
            <TabsTrigger value="tab4">About me</TabsTrigger>
          </TabsList>
          <div>Content</div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
