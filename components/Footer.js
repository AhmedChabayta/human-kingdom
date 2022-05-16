import React from "react";

function Footer() {
  return (
    <div className="text-3xl w-screen font-extrabold text-gray-900 absolute bottom-0 space-x-20 flex justify-start items-start bg-orange-500 z-50 p-2 pl-5 shadow-none">
      <small
        className=" before:content-['Humanity'] before:absolute relative
        before:w-0 before:h-full before:bg-clip-text before:text-transparent
       before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300
      "
      >
        Humanity
      </small>
      <small
        className=" before:content-['ProjectPurpose'] before:absolute relative
        before:w-0 before:h-full before:bg-clip-text before:text-transparent
       before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300 ease-in-out
      "
      >
        ProjectPurpose{" "}
      </small>
      <small
        className=" before:content-['Donate'] before:absolute relative
        before:w-0 before:h-full before:bg-clip-text before:text-transparent
       before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Donate{" "}
      </small>
      <small
        className=" before:content-['Resources'] before:absolute relative
        before:w-0 before:h-full before:bg-clip-text before:text-transparent
       before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Resources{" "}
      </small>
    </div>
  );
}

export default Footer;
