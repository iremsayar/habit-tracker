import React, { useEffect, useState } from "react";
import ColorCard from "../Components/ColorCard";
import { motion } from "framer-motion";
import { useThemeColor } from "../Store/store";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const SelectTheme = () => {
  const { themeColor, setThemeColor } = useThemeColor();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Link to="/select-page-2">
        <div className="flex items-center w-screen justify-end lg:pr-12 md:pr-8 pr-4">
          {themeColor === "bg-[#3A3A3A]" && (
            <motion.div
              initial={{ translateX: -5000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${themeColor}  rounded-md lg:rounded-xl   drop-shadow-2xl`}
            />
          )}
          {themeColor === "bg-[#EEE0E0]" && (
            <motion.div
              initial={{ translateX: -3000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${themeColor}  rounded-md lg:rounded-xl   drop-shadow-2xl`}
            />
          )}
          {themeColor === "bg-[#CFCEDA]" && (
            <motion.div
              initial={{ translateX: -1000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${themeColor}  rounded-md lg:rounded-xl   drop-shadow-2xl`}
            />
          )}
          <MdArrowForwardIos
            className={`xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${
              themeColor !== null ? " text-rose-500 " : "text-rose-200"
            }`}
          />
        </div>
      </Link>
      <motion.div
        initial={{
          opacity: 0,
          translateY: -1500,
          scale: 7,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: "spring",
        }}
        className="text-gray-400 lg:text-[40px] md:text-[30px] text-[26px] xl:pb-20 lg:pb-16 md:py-8 py-8"
      >
        pick your theme color
      </motion.div>
      <div className="flex justify-center">
        <button onClick={() => setThemeColor("bg-[#3A3A3A]")}>
          <ColorCard color="bg-[#3A3A3A]" opacity="100" />
        </button>
        <button onClick={() => setThemeColor("bg-[#EEE0E0]")}>
          <ColorCard color="bg-[#EEE0E0]" opacity="100" />
        </button>
        <button onClick={() => setThemeColor("bg-[#CFCEDA]")}>
          <ColorCard color="bg-[#CFCEDA]" opacity="100" />
        </button>
      </div>
    </div>
  );
};

export default SelectTheme;
