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
  return (
    <div className="flex p-2 flex-col h-[100vh] w-[20vw] min-w-[20vw] overflow-hidden fixed left-0">
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

      <Link href="/">
        <a className="flex justify-center text-3xl">Home</a>
      </Link>
    </div>
  );
}

export default Sidebar;
