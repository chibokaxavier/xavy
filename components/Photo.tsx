"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div>
      <motion.div>
        <div>
          <Image src="/photo.png" alt="photo" width={1000} height={1000}/>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
