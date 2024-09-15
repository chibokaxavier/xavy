"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Work = () => {
  const projects = [
    {
      num: "01",
      category: "Fullstack",
      title: "CareConnect",
      description:
        "CareConnect is an innovative web application designed to streamline the process of booking medical appointments, connecting doctors and patients seamlessly. The platform allows both individual practitioners and hospitals to manage appointments efficiently, offering a flexible solution for private or institutional use.",
      stack: [
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Tailwind CSS" },
        { name: "MongoDB" },
        { name: "Express" },
      ],
      image: "",
      live: "https://care-connect-tan.vercel.app/",
      github: "https://github.com/chibokaxavier/CareConnect",
    },
    {
      num: "02",
      category: "Frontend",
      title: "Arone Energy",
      description:
        "Arone energy specializes in providing innovative power solutions, with a primary focus on the sale and installation of inverters, solar energy systems, and related power equipment. The company is dedicated to helping residential, commercial, and industrial clients overcome energy challenges by offering reliable, sustainable, and cost-effective power backup systems.",
      stack: [{ name: "Html" }, { name: "Jquery" }, { name: "Tailwind CSS" }],
      image: "",
      live: "https://www.aroneenergy.com/",
      github: "",
    },
    {
      num: "03",
      category: "frontend",
      title: "Coin Radar",
      description:
        "A real-time cryptocurrency price tracker built using modern web technologies. The application fetches and displays up-to-date prices for a wide range of cryptocurrencies, providing users with instant access to market data",
      stack: [
        { name: "Nextjs" },
        { name: "Firebase" },
        { name: "Tailwind CSS" },
      ],
      image: "",
      live: "https://crypto-a8eavo7lv-chibokaxavier.vercel.app/",
      github: "",
    },
  ];

  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-akl duration-500 capitalize ">
                {project.title}
              </h2>
              <p className="text-white/60 "> {project.description}</p>
              <ul className="flex gap-4 flex-wrap pb-5">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent text-xl ">
                      {" "}
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">Slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
