/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function InnerPage({ flags, name, nativeName, showInstructions }) {
  return (
    <div dir="auto" className="flex flex-col justify-center items-center">
      <h1
        style={{
          backgroundImage: `url(${flags})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="native_name hover:text-transparent bg-clip-text bg-center self-start text-6xl font-serif transition-all duration:200 ease-linear"
      >
        {" "}
        {nativeName.official || name.official}
      </h1>
      <p
        className={`fixed text-center top-0 right-[50%] text-4xl animate-pulse pt-5  ${
          showInstructions ? "visible" : "invisible"
        }`}
      >
        DRAG LEFT OR RIGHT
      </p>
      <img
        draggable="false"
        className="pb-5 w-1/2 object-contain"
        src={flags}
        alt=""
      />
    </div>
  );
}

export default InnerPage;
