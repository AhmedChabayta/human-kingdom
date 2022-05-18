import React from "react";
import Clock from "./Clock";
import DateWidget from "./DateWidget";
import { NoSsr } from "@mui/material";
import Weather from "./Weather";
import BlackHistory from "./BlackHistory";
import RandomFact from "./RandomFact";
import WomenQuotes from "./WomenQuotes";
import AstronomyOfDay from "./AstronomyOfDay";

export default function Widgets() {
  return (
    <div
      className={`overflow-y-scroll overflow-x-hidden flex flex-col h-screen 
      items-center pr-3 justify-start min-w-[100%] py-20 space-y-10`}
    >
      <NoSsr>
        <RandomFact />
        <WomenQuotes />
        <AstronomyOfDay />
        <Weather />
        <DateWidget />
        <Clock />
      </NoSsr>
    </div>
  );
}
