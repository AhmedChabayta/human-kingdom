import React, { useState } from "react";
import Clock from "./Clock";
import DateWidget from "./DateWidget";
import RandomHistoryFact from "./RandomHistoryFact";
import { Reorder, useDragControls } from "framer-motion";
import Handle from "./Handle";

export default function Widgets() {
  const [items, setItems] = useState([0, 1, 2]);

  const controlsDate = useDragControls();
  const controlsClock = useDragControls();
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <div
          key={item}
          item={item}
          className="space-y-10 p-5 flex flex-col items-center justify-between h-screen"
        >
          <Reorder.Item
            dragListener={false}
            dragControls={controlsDate}
            value={item}
            key={item}
          >
            <Handle controls={controlsDate} />
            <DateWidget />
          </Reorder.Item>
          <Reorder.Item
            dragControls={controlsClock}
            dragListener={false}
            className=""
            value={item}
            key={item}
          >
            <Handle controls={controlsClock} />
            <Clock />
          </Reorder.Item>
        </div>
      ))}
    </Reorder.Group>
  );
}
