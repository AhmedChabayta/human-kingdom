import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      className="text-2xl w-screen font-black text-gray-900 absolute bottom-0
     space-x-20 flex justify-start items-start bg-blue-500 z-50 p-2 pl-5 shadow-none"
    >
      <Link href="/">
        <p className="menu-humanity cursor-pointer">Humanity</p>
      </Link>
      <div className="relative group">
        <p className="menu-purpose  cursor-pointer">Purpose </p>
        <div
          className="text-xl flex flex-col invisible transition-all ease-linear
         group-hover:visible absolute bottom-0 left-0 h-72 w-96 bg-blue-500 p-5 rounded-xl"
        >
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
      <div className="relative">
        <p className="menu-donate  cursor-pointer">Donate </p>
        <div
          className="text-xl flex flex-col invisible transition-all ease-linear
         group-hover:visible absolute bottom-0 left-0 h-72 w-96 bg-blue-500 p-5 rounded-xl"
        >
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
      <div className="relative group">
        <p className="menu-resources cursor-pointer">Resources</p>
        <div
          className="text-xl flex justify-between transition-all ease-linear invisible
         group-hover:visible absolute bottom-12 left-0 h-72 w-fit bg-blue-500 px-5 rounded-xl"
        >
          <div className="flex flex-col p-5 space-y-5">
            <a href="https://www.wikipedia.org/">
              <p>Wikipedia</p>
            </a>
            <a href="https://blackhistoryapi.com/">
              <p>BlackHistoryApi</p>
            </a>
            <a href="https://openweathermap.org/">
              <p>OpenWeather</p>
            </a>
            <a href="https://restcountries.com/">
              <p>RestCountries</p>
            </a>
          </div>
          <div className="flex flex-col p-5 space-y-5 whitespace-nowrap cursor-pointer ">
            <p className="">MORE LINKS</p>
            <p>MORE LINKS</p>
            <p>MORE LINKS</p>
          </div>
        </div>
      </div>
      <p className="menu-experiences relative z-50 cursor-pointer">
        Experiences{" "}
      </p>
    </div>
  );
}

export default Footer;
