import React from "react";
import ColorCard from "../Components/ColorCard";
import { motion } from "framer-motion";
import { useFontColor } from "../Store/store";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const SelectFontColor = () => {
  const { fontColor, setFontColor } = useFontColor();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Link to="/create-habit">
        <div className="flex items-center w-screen justify-end lg:pr-12 md:pr-8 pr-4">
          {fontColor === "bg-[#FFFFFF]" && (
            <motion.div
              initial={{ translateX: -5000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${fontColor} rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          {fontColor === "bg-[#4A2F84]" && (
            <motion.div
              initial={{ translateX: -3000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${fontColor}  rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          {fontColor === "bg-[#EAC7C7]" && (
            <motion.div
              initial={{ translateX: -1000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${fontColor} rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          <MdArrowForwardIos
            className={`xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${
              fontColor !== null ? " text-violet-600 " : "text-violet-300"
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
        pick your font color{" "}
      </motion.div>
      <div className="flex justify-center">
        <button onClick={() => setFontColor("bg-[#FFFFFF]")}>
          <ColorCard color="bg-[#FFFFFF]" opacity="100" press={false} />
        </button>
        <button onClick={() => setFontColor("bg-[#4A2F84]")}>
          <ColorCard color="bg-[#4A2F84]" opacity="100" press={false} />
        </button>
        <button onClick={() => setFontColor("bg-[#EAC7C7]")}>
          <ColorCard color="bg-[#EAC7C7]" opacity="100" press={false} />
        </button>
      </div>
    </div>
  );
};

export default SelectFontColor;
