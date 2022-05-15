import React, { useEffect, useState } from "react";
import Clock from "react-clock";

export default function MyClock() {
  const [size, setSize] = useState(250);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSize = () => {
    if (size === 250) {
      setSize(150);
    } else if (size === 150) {
      setSize(250);
    } else return null;
  };

  return (
    <div onClick={handleSize} className="flex flex-col justify-center">
      <Clock
        size={size}
        hourHandWidth={3}
        hourMarksWidth={2}
        hourHandOppositeLength={10}
        minuteHandOppositeLength={20}
        secondHandOppositeLength={0}
        secondHandLength={100}
        className="rounded-full"
        value={value}
      />
    </div>
  );
}
