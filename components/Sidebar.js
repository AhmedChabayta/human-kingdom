/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";
import SideItems from "./SideItems";

function Sidebar({
  flags,
  name,
  language,
  population,
  nativeName,
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
  currencies,
  query,
}) {
  console.log(name);
  return (
    <div className="flex flex-col h-[100vh] w-[20vw] min-w-[20vw] overflow-hidden ">
      <span className="">
        <img className="" src={flags.svg} alt="" />
      </span>
      <Search names={name} name={query} />
      <SideItems
        officialLanguage={language}
        population={population}
        officialName={name.official}
        officialNativeName={nativeName.official}
        commonNativeName={nativeName.common}
        area={area}
        status={status}
        timezones={timezones}
        capital={capital}
        borders={borders}
        independent={independent}
        startOfWeek={startOfWeek}
        subregion={subregion}
        unMember={unMember}
        continents={continents}
        coatOfArms={coatOfArms}
        currencies={currencies}
      />
    </div>
  );
}

export default Sidebar;
