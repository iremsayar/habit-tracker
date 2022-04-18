import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCookie } from "../Store/store";
const Home = () => {
  const [showText, setShowText] = useState(false);
  const { accept, setAccept } = useCookie();

  return (
    <div className="bg-gradient-to-bl from-white via-cyan-200 to-white  flex flex-col justify-center h-screen w-screen lg:px-20 px-4">
      <div className=" flex row justify-between items-center text-gray-600 lg:text-[40px] md:text-[30px] text-[26px]">
        Make Your Own Habit Tracker
        <Link to="select-page-1">
          <div className="flex row cursor-pointer mx-1">
            <motion.div
              initial={{
                opacity: 0,
                translateX: -1000,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: "spring",
              }}
            >
              <MdArrowForwardIos className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 text-indigo-500" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateX: -500,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: "spring",
              }}
            >
              <MdArrowForwardIos className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 text-indigo-700" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                translateX: -300,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: "spring",
              }}
            >
              <MdArrowForwardIos className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 text-indigo-900" />
            </motion.div>
          </div>
        </Link>
      </div>
      <button
        className=" lg:my-12 my-8 bg-gray-600 lg:h-16 lg:w-28 h-12 w-24 rounded-xl hover:bg-gray-400 hover:scale-110"
        onClick={() => setShowText(true)}
      >
        <span className="lg:text-[40px] md:text-[30px] text-[26px] text-white">
          {" "}
          or . . .
        </span>
      </button>

      <motion.div
        animate={{
          opacity: showText ? [0, 1] : 0,
          translateX: showText ? [-100, 100, 0] : 0,
          scale: showText ? [0, 1] : 0,
        }}
        whileHover={{
          scale: 1.1,
        }}
        className={` ${showText ? "visible" : "invisible"}
      flex justify-center font-semibold underline cursor-pointer lg:text-[44px] md:text-[34px] text-[30px] text-gray-600 hover:text-gray-400 `}
      >
        generate randomly
      </motion.div>
    </div>
  );
};

export default Home;
