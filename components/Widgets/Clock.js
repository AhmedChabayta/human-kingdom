import React, { useEffect, useState } from "react";
import Clock from "react-clock";

export default function MyClock() {
  const [size, setSize] = useState(150);
  const [showNumbers, setShowNumbers] = useState(true);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleSize = () => {
    if (size === 150) {
      setSize(100);
      setShowNumbers(false);
      return;
    } else if (size === 100) {
      setSize(150);
      setShowNumbers(true);
      return;
    } else return;
  };
  return (
    <div
      onClick={handleSize}
      className={`flex flex-col justify-center items-center`}
    >
      <Clock
        renderNumbers={showNumbers}
        draggable="false"
        size={size}
        hourHandWidth={2}
        hourMarksWidth={2}
        hourHandOppositeLength={10}
        minuteHandOppositeLength={15}
        secondHandOppositeLength={0}
        secondHandLength={50}
        className="rounded-full text-white bg-orange-500 transition-all ease-linear 250"
        value={value}
      />
    </div>
  );
}
