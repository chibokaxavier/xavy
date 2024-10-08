  'use client'
 import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CHIBOKA.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CHIBOKA.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="">Software Developer</span>
              <h1 className="h1 mb-6 xl:mt-4 mt-4">
                Hello i&apos;m <br />{" "}
                <span className="text-accent">Emmanuel Chiboka</span>{" "}
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80 ">
                I excel at crafting elegant digital experiences and i am
                proficient in various programming languages and technologies{" "}
              </p>
              <div className="flex flex-col xl:flex-row items-center  gap-8">
                <Button
                  variant="outline"
                  size="sm"
                  className="uppercase  flex items-center gap-2"
                  onClick={onButtonClick}
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-6 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none  xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        
        <Stats />
      </section>
    </>
  );
}
