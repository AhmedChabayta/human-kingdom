/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import React from "react";
import Navbar from "./Navbar";
import Thumbnail from "./Thumbnail";

function CountriesGrid({ countries, flags }) {
  return (
    <div>
      <Navbar />
      <div className="flex relative">
        <img
          className="brightness-80"
          src="https://cdn.wallpapersafari.com/9/33/ZpwVgq.jpg"
          alt=""
        />
        <div className="bg-gradient-to-t from-black absolute w-screen h-20 bottom-0" />
      </div>
      <div className="flex md:grid flex-col md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-x-hidden h-fit">
        {countries.map((country, i) => (
          <Thumbnail
            key={i}
            names={country.name}
            flags={country.flags}
            language={country.languages}
          />
        ))}
      </div>
    </div>
  );
}

export default CountriesGrid;
export const getStaticProps = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
