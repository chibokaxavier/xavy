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
  description:
    "I am Chiboka Emmanuel, a forward-thinking and quick-witted software developer with exceptional leadership skills. As a fast learner with a passion for acquiring new knowledge, I consistently demonstrate a strong work ethic and punctuality, always meeting or exceeding deadlines. My humor and excellent interpersonal skills enable me to build and maintain strong relationships, making me an effective and engaging team player. I thrive in fast-paced environments and am always eager to embrace new challenges and opportunities for growth.",
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
      fieldValue: "3+ years",
    },
    {
      fielddName: "Email",
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
  description:
    "Since starting my journey in 2020, I've developed responsive and user-friendly interfaces using HTML, CSS, and JavaScript. I've also worked with React and Vue.js, building everything from static websites to complex web applications. This experience has sharpened my problem-solving skills and ability to collaborate with design and backend teams. I stay updated with industry trends to deliver high-quality web solutions.",
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
  description:
    "I graduated from the University of Nigeria with a degree in Metallurgical and Materials Engineering. Despite my engineering background, I have developed a strong proficiency in the tech world. My education has provided me with a solid foundation in problem-solving and analytical thinking, which I've seamlessly applied to my tech endeavors. This unique combination of engineering knowledge and tech skills allows me to approach challenges with a diverse perspective and innovative solutions.",
  items: [
    {
      institution: "University of Nigeria, Nsukka ",
      degree: "Metallurgical and Materials Engineering",
      duration: "October 2018 - May 2024",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "I excel in frontend frameworks such as Next.js, Tailwind CSS etc, allowing me to create highly efficient and aesthetically pleasing web applications. My proficiency extends to backend technologies as well, with a solid understanding of Node.js and MongoDB, enabling me to build robust full-stack applications. This combination of skills ensures I can handle both the client and server sides of development effectively.",
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
          <TabsList className="flex flex-col max-w-[380px] w-full mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="About me">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-white/80 mx-auto xl:mx-0 max-w-[600px]">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col rounded-xl justify-center items-center xl:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60"> {item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col  gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4  ">
                  {skills.skillist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/80 mx-auto xl:mx-0 max-w-[600px]">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col rounded-xl justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px]">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60"> {item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="About me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold  ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {about.description}
                </p>
                <ul className="mx-auto xl:mx-0 max-w-[620px] grid grid-cols-1 xl:grid-cols-2 gap-y-6">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fielddName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
