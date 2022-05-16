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
        hourHandWidth={3}
        hourMarksWidth={2}
        hourHandOppositeLength={10}
        minuteHandOppositeLength={20}
        secondHandOppositeLength={0}
        secondHandLength={100}
        className="rounded-full text-gray-900 bg-orange-500"
        value={value}
      />
    </div>
  );
}
