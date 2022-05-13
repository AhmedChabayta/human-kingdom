/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Thumbnail({ names, flags, language }) {
  return (
    <>
      {names.common === "Israel" ? (
        ""
      ) : (
        <div className="pt-10 p-3 overflow-hidden hover:scale-[1.1] transition-all duration-200 ease-linear group">
          <Link href={`/Countries/${names.common}`}>
            <a className="cursor-pointer flex flex-col">
              <img
                className="w-[20vw] object-contain"
                src={flags.svg || flags.png}
                alt=""
                title={names.common}
              />

              <h1 className="flex">{names.official}</h1>
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

export default Thumbnail;
