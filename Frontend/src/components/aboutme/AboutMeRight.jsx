import React from "react";
import { motion } from "framer-motion";

const AboutMeRight = () => {
  return (
    <div>
      <motion.div
        className="w-[300px] h-[420px] rounded-l-full rounded-r-full justify-center mx-auto sm:w-[300px] bg-orange pl-10 my-8 sm:disabled"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="../public/images/about-me.jpg"
          className="w-[30px] h-[420px] rounded-full justify-center mx-auto ml-4 sm:w-[300px]"
          alt="about me"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default AboutMeRight;
