import React, { useState } from "react";
import { motion } from "framer-motion";

const ColorCard = ({ color, opacity, press }) => {
  console.log(color);
  console.log(opacity);
  console.log(press);
  return (
    <motion.div
      animate={{
        opacity: [0, opacity / 100],
        scale: [0.9, 1.1, 1],
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 500,
      }}
      whileHover={{
        scale: 1.1,
        borderWidth: 10,
        borderColor: "silver",
      }}
      className={`mx-4 lg:mx-4 xl:mx-8 xl:w-80 xl:h-80 lg:w-72 lg:h-72 md:w-40 md:h-40 w-20 h-20 ${color} opacity-${opacity} lg:rounded-3xl rounded-2xl  drop-shadow-2xl
          `}
    />
  );
};

export default ColorCard;
