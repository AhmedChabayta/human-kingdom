import React, { useState } from "react";
import Clock from "./Clock";
import DateWidget from "./DateWidget";
import RandomHistoryFact from "./RandomHistoryFact";
import { Reorder, useDragControls } from "framer-motion";
import Handle from "./Handle";
import { NoSsr } from "@mui/material";

export default function Widgets() {
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6]);

  const controlsDate = useDragControls();
  const controlsClock = useDragControls();
  return (
    <div className="overflow-y-scroll">
      <NoSsr>
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
          <div className="space-y-10 p-5 flex flex-col items-center justify-between h-screen">
            <Reorder.Item dragListener={false} dragControls={controlsDate}>
              <div
                className="w-10 h-10 rounded-full bg-orange-900/10 blur hover:bg-orange-500"
                onPointerDown={(e) => controlsDate.start(e)}
              />
              <DateWidget />
            </Reorder.Item>
            <Reorder.Item
              dragControls={controlsClock}
              dragListener={false}
              className=""
            >
              <div
                className="w-10 h-10 rounded-full bg-orange-900/10  blur hover:bg-orange-500"
                onPointerDown={(e) => controlsClock.start(e)}
              />
              <Clock />
            </Reorder.Item>
          </div>
        </Reorder.Group>
      </NoSsr>
    </div>
  );
}
