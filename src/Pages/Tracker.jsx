import React, { useState } from "react";
import {
  useThemeColor,
  useCreateHabit,
  useLeftBoxColor,
  useTopBoxColor,
  isActive,
  useActiveBox,
  usePassiveBox,
  useFontColor,
} from "../Store/store";

const Tracker = () => {
  const { themeColor } = useThemeColor();
  const { createHabit } = useCreateHabit();
  const { leftBoxColor } = useLeftBoxColor();
  const { topBoxColor } = useTopBoxColor();
  const { passiveBox } = usePassiveBox();
  const { activeBox } = useActiveBox();
  const { fontColor } = useFontColor();
  const { active, setActive } = isActive();

  const [cols, setCol] = useState([]);
  const [rows, setRow] = useState([]);
  console.log(cols);
  console.log(rows);
  const DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className={`h-screen w-screen flex items-center ${themeColor}`}>
      <div className="flex w-full justify-between">
        <table className="border-separate border-slate-500 w-full m-8">
          <tr>
            <td className="md:p-6 p-4 " />
            {createHabit.map((item) => (
              <td
                className={`rounded-3xl border border-slate-500 text-center ${topBoxColor}`}
              >
                {item}
              </td>
            ))}
          </tr>
          {DAYS_OF_WEEK.map((item, row) => (
            <tr>
              <td
                className={`rounded-3xl md:p-3 p-2 text-center ${leftBoxColor} `}
              >
                {item}
              </td>
              {createHabit.map((i, col) => (
                <td
                  className="bg-slate-50"
                  onClick={() => {
                    console.log(col, row, item);
                    setCol([...cols, col]);
                    setRow([...rows, row]);
                  }}
                >
                  {col}, {row}
                </td>
              ))}
              {/* {createHabit.map((habit, ind) => (
                <td
                  className={` rounded-full
                ${
                  indexNo.includes(ind) &&
                  day.includes(item) &&
                  doneHabit.includes(habit)
                    ? `${activeBox}`
                    : `${passiveBox}`
                }
                `}
                  onClick={() => {
                    setIndexNo([...indexNo, ind]);
                    setDay([...day, item]);
                    setDoneHabit([...doneHabit, habit]);
                    console.log(ind, item, habit);
                  }}
                ></td>
              ))} */}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Tracker;
