import React from "react";
import Clock from "./Clock";
import DateWidget from "./DateWidget";
import { NoSsr } from "@mui/material";
import Weather from "./Weather";

export default function Widgets() {
  return (
    <div
      className={`overflow-y-scroll overflow-x-hidden flex flex-col h-screen items-center justify-start`}
    >
      <NoSsr>
        <div>
          <DateWidget />
        </div>
        <div className="">
          <Clock />
        </div>
      </NoSsr>
      <div>
        <Weather />
      </div>
      {/* <div>
        <BlackHistory />
      </div> */}
    </div>
  );
}
