import React, { useState } from "react";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

export default function DateWidget() {
  const [showDay, setShowDay] = useState(false);
  const time = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = new Date();
  const Day = day.getDate();
  const name = month[day.getMonth()];
  return (
    <div
      draggable="false"
      className="flex p-5 object-contain w-[15rem] justify-between items-center"
    >
      <p className="text-[80px] text-blue-500">{Day}</p>
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-[20px] text-orange-500">
            {time.toLocaleDateString()}
          </h1>
          <h1 className="text-[50px] text-blue-500">{name}</h1>
        </div>
      </div>
    </div>
  );
}

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
