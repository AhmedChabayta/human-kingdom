import React from "react";

function Handle({ controls }) {
  return (
    <>
      <div
        onPointerDown={(e) => controls.start(e)}
        className={`grid grid-cols-5 grid-rows-5 w-5 h-5 gap-1 cursor-grab`}
      >
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
        <div className="h-1 w-1 bg-black group-hover:bg-blue-500 opacity-20 group-hover:opacity-100" />
      </div>
    </>
  );
}

export default Handle;
