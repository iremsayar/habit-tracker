import React, { useState } from "react";
import ColorCard from "../Components/ColorCard";
import { motion } from "framer-motion";
import { useLeftBoxColor } from "../Store/store";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const SelectLeftSideBox = () => {
  const { leftBoxColor, setLeftBoxColor } = useLeftBoxColor();
  return (
    <div>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Link to="/select-page-3">
          <div className="flex items-center w-screen justify-end lg:pr-12 md:pr-8 pr-4">
            {leftBoxColor === "bg-[#C153D3]" && (
              <motion.div
                initial={{ translateX: -5000, translateY: 1000 }}
                animate={{ translateX: 0, translateY: 0 }}
                className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 bg-[#C153D3] opacity-40 rounded-md lg:rounded-xl drop-shadow-2xl`}
              />
            )}
            {leftBoxColor === "bg-[#615959]" && (
              <motion.div
                initial={{ translateX: -3000, translateY: 1000 }}
                animate={{ translateX: 0, translateY: 0 }}
                className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${leftBoxColor}  rounded-md lg:rounded-xl drop-shadow-2xl`}
              />
            )}
            {leftBoxColor === "bg-[#0D85AB]" && (
              <motion.div
                initial={{ translateX: -1000, translateY: 1000 }}
                animate={{ translateX: 0, translateY: 0 }}
                className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${leftBoxColor} opacity-80 rounded-md lg:rounded-xl drop-shadow-2xl`}
              />
            )}
            <MdArrowForwardIos
              className={`xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${
                leftBoxColor !== null ? "text-indigo-500" : "text-indigo-200"
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
          className="text-gray-400 lg:text-[40px] md:text-[30px] text-[26px] xl:pb-20 lg:pb-16 md:py-8 py-8 px-4"
        >
          pick your week day boxes color
        </motion.div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setLeftBoxColor("bg-[#C153D3]");
            }}
          >
            <ColorCard color="bg-[#C153D3]" opacity="40" />
          </button>
          <button
            onClick={() => {
              setLeftBoxColor("bg-[#615959]");
            }}
          >
            <ColorCard color="bg-[#615959]" opacity="100" />
          </button>
          <button
            onClick={() => {
              setLeftBoxColor("bg-[#0D85AB]");
            }}
          >
            <ColorCard color="bg-[#0D85AB]" opacity="80" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectLeftSideBox;
