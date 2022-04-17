import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { useCreateHabit } from "../Store/store";
import { Link } from "react-router-dom";

const CreateHabit = () => {
  const [input, setInput] = useState("");
  const [habit, setHabit] = useState([]);
  const { createHabit, setCreateHabit } = useCreateHabit();
  const [create, setCreate] = useState(false);
  // const [erase, setErase] = useState(-1);

  // const clickHandle = () => {
  //   habit.splice(erase, 1);
  // };

  // console.log(habit);

  useEffect(() => {
    setCreateHabit(habit);
  }, [habit]);

  console.log("createHabit:::::::::::::::::::", createHabit);

  return (
    <div className="h-screen w-screen flex flex-col  xl:px-20 lg:px-12 px-4">
      {createHabit !== null && (
        <Link to="/habit-tracker">
          <div className=" flex justify-end ">
            <MdArrowForwardIos className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 text-green-700 mt-8" />
          </div>
        </Link>
      )}
      <div className="h-1/2 flex flex-col justify-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="text-gray-500 lg:text-[40px] md:text-[30px] text-[26px] font-thin mb-8"
        >
          Create your habits
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.input
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            type="text"
            value={input}
            className="outline-none bg-slate-300 md:w-1/3 lg:h-16 w-3/4 h-10 md:h-12 md:px-8 px-6 mx-8 rounded-2xl xl:text-[32px] lg:text-[28px]  md:text-[26px] text-[20px] text-slate-900 "
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <motion.div
            initial={{
              translateX: -1500,
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 300,
            }}
          >
            <BsFillArrowRightCircleFill
              onClick={() => {
                setCreate(!create);
                setHabit((createHabit) => [...createHabit, input]);
                setInput("");
              }}
              className="text-cyan-500 cursor-pointer lg:text-[70px] md:text-[55px] text-[45px] hover:text-cyan-400"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {createHabit.map((item, index) => (
          <div key={index} className={`flex mb-3 items-center`}>
            <span className="text-gray-800 lg:text-[40px] md:text-[30px] text-[26px] font-thin ">
              {item}
            </span>
            {/* <RiDeleteBin6Line
              className="lg:text-[40px] md:text-[30px] text-[26px] cursor-pointer text-purple-700 mx-5 "
              onClick={() => {
                {
                  setErase(index);
                  clickHandle();
                }
              }}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateHabit;
