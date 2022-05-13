import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Details from "./Details";
import Sidebar from "./Sidebar";

function Countries({ country }) {
  const countries = country.map((country) => country);
  const router = useRouter();
  const common = router.query.common;
  return (
    <div className="">
      {countries.map(
        ({
          flags,
          name,
          languages,
          population,
          i,
          area,
          timezones,
          status,
          capital,
          borders,
          independent,
          startOfWeek,
          subregion,
          unMember,
          continents,
          coatOfArms,
        }) => (
          <div className="flex justify-between" key={name.official}>
            <Sidebar
              area={area}
              status={status}
              flags={flags}
              name={name}
              language={languages.eng || languages.ara || languages.spa}
              population={population}
              timezones={timezones}
              nativeName={
                name.nativeName.ara ||
                name.nativeName.spa ||
                name.nativeName.eng
              }
              capital={capital}
              borders={borders}
              independent={independent}
              startOfWeek={startOfWeek}
              subregion={subregion}
              unMember={unMember}
              continents={continents}
              coatOfArms={coatOfArms}
            />
            <Details flags={flags} />
          </div>
        )
      )}
    </div>
  );
}

export default Countries;
export const getStaticProps = async (context) => {
  const common = context.params.common;
  const res = await fetch(`https://restcountries.com/v3.1/name/${common}`);
  const data = await res.json();
  return {
    props: {
      country: data,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  const countries = data.map((item) => item.name);
  const paths = countries.map((country) => {
    return {
      params: { common: country.common },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
