import React from "react";
import Thumbnail from "./Thumbnail";

function CountriesGrid({ countries, flags }) {
  return (
    <div className="grid grid-cols-6 gap-4 overflow-x-hidden h-fit">
      {countries.map((country, i) => (
        <Thumbnail
          key={i}
          names={country.name}
          flags={country.flags}
          language={country.languages}
        />
      ))}
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
