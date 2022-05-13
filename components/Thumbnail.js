/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Thumbnail({ names, flags, language }) {
  const common = names.common;
  return (
    <div className=" w-72 h-72 justify-center p-5 overflow-x-hidden">
      <div className="">
        <img
          className="w-[20vw] h-[20vh] object-contain"
          src={flags.svg}
          alt={flags.common}
        />
        <Link href={`/Countries/${common}`}>
          <a className="cursor-pointer">
            <h1>{names.official}</h1>
          </a>
        </Link>
        <h1>{names.common}</h1>
      </div>
      <div></div>
    </div>
  );
}

export default Thumbnail;
