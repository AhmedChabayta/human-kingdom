import Link from "next/link";
import React from "react";

function Enter() {
  return (
    <div>
      <Link href={`/Countries/Palestine`}>
        <h1
          className="cursor-pointer before:bg-clip-text after:bg-clip-text hover:before:w-0 hover:text-orange-500 text-transparent relative before:w-[100%] before:h-full
         before:transition-all before:duration-[200ms] after:duration-[200ms] before:ease-in-out after:ease-in-out before:bg-blue-500 before:absolute after:absolute before:bottom-0 before:content-['enter'] text-9xl font-bold font-san
         after:w-[50%] after:h-full before:left-0 after:left-0 hover:after:-translate-x-[200px] hover:before:translate-x-[200px] hover:after:opacity-0 hover:before:opacity-0
         after:transition-all  after:bg-blue-500  fter:bottom-0 after:content-['enter'] "
        >
          ENTER
        </h1>
      </Link>
    </div>
  );
}

export default Enter;
