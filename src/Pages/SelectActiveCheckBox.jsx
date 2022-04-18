import React from "react";
import ColorCard from "../Components/ColorCard";
import { motion } from "framer-motion";
import { useActiveBox } from "../Store/store";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const SelectActiveCheckBox = () => {
  const { activeBox, setActiveBox } = useActiveBox();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Link to="/select-page-5">
        <div className="flex items-center w-screen justify-end lg:pr-12 md:pr-8 pr-4">
          {activeBox === "bg-[#FDFDFD]" && (
            <motion.div
              initial={{ translateX: -5000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${activeBox} rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          {activeBox === "bg-[#ABA9FF]" && (
            <motion.div
              initial={{ translateX: -3000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${activeBox} opacity-90  rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          {activeBox === "bg-[#13299C]" && (
            <motion.div
              initial={{ translateX: -1000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${activeBox}  rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          <MdArrowForwardIos
            className={`xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${
              activeBox !== null ? " text-blue-600 " : "text-blue-300"
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
        pick your active check box color{" "}
      </motion.div>
      <div className="flex justify-center">
        <button onClick={() => setActiveBox("bg-[#FDFDFD]")}>
          <ColorCard color="bg-[#FDFDFD]" opacity="100" press={false} />
        </button>
        <button onClick={() => setActiveBox("bg-[#ABA9FF]")}>
          <ColorCard color="bg-[#ABA9FF]" opacity="90" press={false} />
        </button>
        <button onClick={() => setActiveBox("bg-[#13299C]")}>
          <ColorCard color="bg-[#13299C]" opacity="100" press={false} />
        </button>
      </div>
    </div>
  );
};

export default SelectActiveCheckBox;
