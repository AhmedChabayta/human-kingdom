/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function Thumbnail({ names, flags, language }) {
  const lazyRoot = useRef(null);
  return (
    <>
      {names.common === "Israel" ? (
        ""
      ) : (
        <div className="pt-10 p-3 overflow-hidden md:hover:scale-[1.1] transition-all ease-linear group cursor-pointer active:scale-[1.1]">
          <Link href={`/Countries/${names.common}`}>
            <span className="block">
              <Image
                lazyRoot={lazyRoot}
                layout="responsive"
                height={400}
                width={400}
                className="w-[20vw] object-contain"
                src={flags.svg || flags.png}
                alt=""
                title={names.common}
              />
            </span>
          </Link>
        </div>
      )}
    </>
  );
}

export default Thumbnail;
