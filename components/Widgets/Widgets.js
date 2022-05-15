import React, { useState } from "react";
import Clock from "./Clock";
import DateWidget from "./DateWidget";
import RandomHistoryFact from "./RandomHistoryFact";

export default function Widgets() {
  return (
    <div className="space-y-10 p-5 flex flex-col items-center justify-between h-screen">
      <DateWidget />
      <Clock />
    </div>
  );
}
