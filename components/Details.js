/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import useDraggableScroll from "use-draggable-scroll";
import InnerPage from "./InnerPage";
import InnerPageRight from "./InnerPageRight";

function Details({ flags, name, nativeName }) {
  const ref = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <div
      onClick={() => setShowInstructions(false)}
      onChange={() => setShowInstructions(!showInstructions)}
      onDoubleClick={() => setShowScrollbar(!showScrollbar)}
      ref={ref}
      onMouseDown={onMouseDown}
      className={`flex overflow-x-scroll h-full snap-normal snap-x p-10 ${
        showScrollbar ? "scrollbar-hide" : "scrollbar-default"
      }`}
    >
      {" "}
      <div className="w-[78vw] flex flex-col flex-shrink-0 snap-start">
        <InnerPage
          nativeName={nativeName}
          flags={flags.svg}
          name={name}
          showInstructions={showInstructions}
        />
      </div>
      <InnerPageRight flags={flags.svg} showInstructions={showInstructions} />
    </div>
  );
}

export default Details;
