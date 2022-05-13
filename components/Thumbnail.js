/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Thumbnail({ names, flags, language }) {
  const common = names.common;
  return (
    <div className="h-[200px] min-w-[100%] pt-10 p-3 overflow-hidden hover:scale-[1.1] transition-all duration-200 ease-linear group">
      <Link href={`/Countries/${common}`}>
        <a className="cursor-pointer flex flex-col object-contain">
          <img src={flags.svg} alt={flags.common} title={names.common} />
          <h1 className="hidden group-hover:flex">{names.official}</h1>
        </a>
      </Link>
    </div>
  );
}

export default Thumbnail;
