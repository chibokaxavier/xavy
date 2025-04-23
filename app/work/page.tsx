"use client";
import { easeIn, motion } from "framer-motion";
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
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Work = () => {
  const projects = [
    {
      num: "01",
      category: "Fullstack",
      title: "Kriapay",
      description:
        "Kriapay is a fintech company that facilitates secure and seamless cross-border payments between African countries. The platform enables businesses and individuals to transact efficiently while ensuring compliance with financial regulations.",
      stack: [
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Redux Toolkit" },
        { name: "Tailwind CSS" },
        { name: "MongoDB" },
        { name: "Express" },
      ],
      image: "/careconnect.png",
      live: "https://kriapay.com",
      github: "https://github.com/chibokaxavier",
    },
    {
      num: "02",
      category: "Frontend",
      title: "Arone Energy",
      description:
        "Arone energy specializes in providing innovative power solutions, with a primary focus on the sale and installation of inverters, solar energy systems, and related power equipment. The company is dedicated to helping residential, commercial, and industrial clients overcome energy challenges by offering reliable, sustainable, and cost-effective power backup systems. I Redesigned the company website to enhance user experience and navigation.",
      stack: [{ name: "Html" }, { name: "Jquery" }, { name: "Tailwind CSS" }],
      image: "/arone.png",
      live: "https://www.aroneenergy.com/",
      github: "",
    },
    {
      num: "03",
      category: "Fullstack",
      title: "Techtrail",
      description:
        "TechTrail is a modern Learning Management System (LMS) designed for seamless, interactive learning. From video lessons to quizzes and certifications, it empowers individuals and teams to upskill efficiently. Start your learning journey with TechTrail today!",
      stack: [
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Redux Toolkit" },
        { name: "Tailwind CSS" },
        { name: "MongoDB" },
        { name: "Express" },
      ],
      image: "/careconnect.png",
      live: "https://techtraill.vercel.app",
      github: "https://github.com/chibokaxavier/techtrail",
    },
    {
      num: "04",
      category: "Fullstack",
      title: "Delidish",
      description:
        "Delidish is a sleek and modern eCommerce food ordering app that allows users to browse a wide variety of cuisines, place orders effortlessly, and have meals delivered straight to their doorsteps. Designed for convenience, it offers real-time order tracking, secure payment options and personalized user profiles.",
      stack: [
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Redux Toolkit" },
        { name: "Tailwind CSS" },
        { name: "MongoDB" },
        { name: "Express" },
      ],
      image: "/careconnect.png",
      live: "https://delidish.vercel.app",
      github: "https://github.com/chibokaxavier/delidish",
    },
    {
      num: "05",
      category: "Frontend",
      title: "Smartvest",
      description:
        "A modern, intuitive landing page designed to build trust, showcase opportunities, and guide you to smarter financial moves.",
      stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
      image: "/careconnect.png",
      live: "https://smartvest.vercel.app",
      github: "https://github.com/chibokaxavier/smartvest",
    },
    {
      num: "06",
      category: "Frontend",
      title: "Tooniverse",
      description:
        "Dive into a sleek landing page, animated world built for gamers. Smooth transitions, bold visuals, and instant access to the hottest titles — all in one epic hub.",
      stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
      image: "/careconnect.png",
      live: "https://tooniverse.vercel.app",
      github: "https://github.com/chibokaxavier/tooniverse",
    },
    {
      num: "07",
      category: "Frontend",
      title: "Metaverse",
      description:
        "Step beyond the screen into a fully immersive landing page. With sleek animations and next-gen design, this is your gateway to experiences that blur the line between real and virtual.",
      stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
      image: "/careconnect.png",
      live: "https://metaverse-blond-phi.vercel.app",
      github: "https://github.com/chibokaxavier/metaverse",
    },
    {
      num: "08",
      category: "Frontend",
      title: "Travel-Hive",
      description:
        "A modern travel hub with smooth animations and seamless booking. Discover new destinations, curated experiences, and the journey of a lifetime — all in one place.",
      stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
      image: "/careconnect.png",
      live: "https://travelhive-nu.vercel.app",
      github: "https://github.com/chibokaxavier/travel-hive",
    },
  ];

  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between  xl:order-none">
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
              <div className="flex items-center gap-4  ">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a href={project.github} target="_blank">
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
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className=""
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[160px] relative group justify-center items-center bg-transparent">
                      {/* <div className="absolute top-0 bottom-0 w-full h-full  z-10 "></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="object-contain "
                        />
                      </div> */}
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
