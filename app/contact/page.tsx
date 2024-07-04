"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { FaPhoneAlt, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+234)8121826916" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Chibokaxavier@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Lagos/Enugu,Nigeria ",
  },
];
const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] xl:order-none order-2">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let us work together</h3>
              <p className="text-white/60">
                Let&#39;s Work Together I&#39;m excited to collaborate on your next
                project! With my extensive experience in web development, I can
                help bring your vision to life, whether it&#39;s a dynamic
                application or a sleek, responsive website. Let&#39;s create
                something exceptional together. Reach out, and let&#39;s get
                started!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="secondname" placeholder="Secondname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Textarea
                className="h-[200px] "
                placeholder="Type your message here"
              />
              <Button size="sm" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 mb-8 xl:order-none order-1 flex items-center xl:justify-end xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex  items-center gap-6">
                    {" "}
                    <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
