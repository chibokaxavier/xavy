"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Web Development/Design",
    href: "",
    Description:
      "I offer full-stack website development services, creating customized, scalable websites from scratch. From conceptualization and design to frontend and backend development, I ensure a seamless and efficient web presence. Specializing in tailor-made web designs, I align with your unique brand identity and business goals, developing visually stunning websites that set you apart from the competition.",
  },
  {
    num: "02",
    href: "",
    title: "SEO",
    Description:
      "Unlock the full  potential of your website with our cutting-edge SEO services. I drive organic traffic, improve search rankings, and enhance user experience with tailored strategies. From precise keyword research and on-page SEO to technical SEO for site speed and mobile responsiveness, we boost the visibility and traffic of your brand. Achieve higher visibility and sustainable growth with our expert solutions. Let us get started today!",
  },
  {
    num: "03",
    title: "UI/UX",
    href: "",
    Description:
      "I ensure your website reflects your brand identity through meticulous attention to visual details, crafting cohesive and appealing designs. I focus on intuitive, engaging user experiences by carefully designing navigation, information architecture, and interactions to meet user needs and effectively communicate your message.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]
          "
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-1  gap-6 group flex-col">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center hover:-rotate-45 items-center"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className=" text-[32px] xl:text-[42px] leading-none text-white font-bold transition-all duration-500 group-hover:text-accent ">
                  {service.title}
                </h2>

                <p className="text-white/60">{service.Description}</p>
                <div className="border-b border-white/20 w-full mb-10" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
