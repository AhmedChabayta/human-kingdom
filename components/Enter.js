import { NoSsr } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import helloData from "../hello.json";

function Enter() {
  const [show, setShow] = useState();
  const hello = helloData.map((hello) => hello);
  const randomHello = undefined
    ? ""
    : hello[Math.floor(Math.random() * hello.length - 1)];
  return (
    <NoSsr>
      <div className="p-5 flex flex-col justify-start ">
        <Link href={`/Countries/Palestine`}>
          <h1
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`pl-2 before:pl-2 after:pl-2 cursor-pointer before:bg-clip-text after:bg-clip-text hover:before:w-0 hover:text-orange-500 text-transparent relative before:w-[100%] before:h-full
         before:transition-all before:duration-[200ms] after:duration-[200ms] before:ease-in-out after:ease-in-out before:bg-blue-500 before:absolute after:absolute before:bottom-0  text-9xl font-bold font-san
         after:w-[50%] after:h-full before:left-0 after:left-0 hover:after:-translate-x-[200px] hover:before:translate-x-[200px] hover:after:opacity-0 hover:before:opacity-0
         after:transition-all after:bg-blue-500 after:bottom-0 after:content-['enter'] before:content-['enter'] hover:before:blur hover:after:blur `}
          >
            {randomHello.hello === undefined ? "" : randomHello.hello}
          </h1>
        </Link>
        <p
          className={`text-blue-500 text-6xl p-5 ${
            show ? "visible" : "invisible"
          }`}
        >
          {randomHello.language}
        </p>
      </div>
    </NoSsr>
  );
}

export default Enter;
