import React from "react";
import ColorCard from "../Components/ColorCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { usePassiveBox } from "../Store/store";
const SelectPassiveBox = () => {
  const { passiveBox, setPassiveBox } = usePassiveBox();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Link to="/select-page-6">
        <div className="flex items-center w-screen justify-end lg:pr-12 md:pr-8 pr-4">
          {passiveBox === "bg-[#134A7C]" && (
            <motion.div
              initial={{ translateX: -5000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${passiveBox} opacity-80 rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          {passiveBox === "bg-[#FFFFFF]" && (
            <motion.div
              initial={{ translateX: -3000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${passiveBox} opacity-40  rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          {passiveBox === "bg-[#ABA9FF]" && (
            <motion.div
              initial={{ translateX: -1000, translateY: 1000 }}
              animate={{ translateX: 0, translateY: 0 }}
              className={`lg:mx-4 xl:mx-8 xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${passiveBox} opacity-40 rounded-md lg:rounded-xl drop-shadow-2xl`}
            />
          )}
          <MdArrowForwardIos
            className={`xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 ${
              passiveBox !== null ? " text-cyan-500 " : "text-cyan-200"
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
        pick your passive check box color
      </motion.div>
      <div className="flex justify-center">
        <button onClick={() => setPassiveBox("bg-[#134A7C]")}>
          <ColorCard color="bg-[#134A7C]" opacity="80" press={false} />
        </button>
        <button onClick={() => setPassiveBox("bg-[#FFFFFF]")}>
          <ColorCard color="bg-[#FFFFFF]" opacity="40" press={false} />
        </button>
        <button onClick={() => setPassiveBox("bg-[#ABA9FF]")}>
          <ColorCard color="bg-[#ABA9FF]" opacity="40" press={false} />
        </button>
      </div>
    </div>
  );
};

export default SelectPassiveBox;
