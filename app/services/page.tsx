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
    title: "User interface/Experience",
    href: "",
    Description:
      "I ensure your website reflects your brand identity through meticulous attention to visual details, crafting cohesive and appealing designs. I focus on intuitive, engaging user experiences by carefully designing navigation, information architecture, and interactions to meet user needs and effectively communicate your message.",
  },
  {
    num: "03",
    href: "",
    title: "SEO",
    Description:
      "Unlock your website's potential with our cutting-edge SEO services. I drive organic traffic, improve search rankings, and enhance user experience with tailored strategies. From precise keyword research and on-page SEO to technical SEO for site speed and mobile responsiveness, we boost your brand's visibility and traffic. Achieve higher visibility and sustainable growth with our expert solutions. Let's start today!",
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
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]
          "
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-1  gap-6 group flex-col">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold">{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>

                <p className="">{service.Description}</p>
                <div className="border-b border-white/20 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
