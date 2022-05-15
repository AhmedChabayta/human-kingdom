import Link from 'next/link';
import React from 'react'

function Enter() {
  return (
    <div>
      <Link href={`/Countries/Palestine`}>
        <h1 className="cursor-pointer before:h-[10px] relative before:w-0 hover:before:w-full before:transition-all before:duration-150 before:ease-linear before:bg-black before:absolute before:bottom-0 before:content-[''] text-9xl font-bold font-san">
          ENTER
        </h1>
      </Link>
    </div>
  );
}

export default Enter