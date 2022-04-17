import React from "react";
import { useThemeColor, useCreateHabit } from "../Store/store";

const Tracker = () => {
  const { themeColor } = useThemeColor();
  const { createHabit } = useCreateHabit();
  const DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  console.log(themeColor);
  return <div className={`h-screen w-screen ${themeColor}`}>Tracker</div>;
};

export default Tracker;
