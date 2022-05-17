import React from "react";
import Clock from "./Clock";
import DateWidget from "./DateWidget";
import { NoSsr } from "@mui/material";
import Weather from "./Weather";
import BlackHistory from "./BlackHistory";

export default function Widgets() {
  return (
    <div
      className={`overflow-y-scroll overflow-x-hidden flex flex-col h-screen items-center justify-start min-w-[100%]`}
    >
      <NoSsr>
        <div className="">
          <DateWidget />
        </div>
        <div className="">
          <Clock />
        </div>
      </NoSsr>
      <div className="">
        <Weather />
      </div>
      <div>
        <BlackHistory />
      </div>
    </div>
  );
}
