/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
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
}) {
  return (
    <div className="flex flex-col h-full w-[50vw] overflow-scroll pl-5">
      <Link href="/">
        <a className="p-2 cursor-pointer hover:underline">Home</a>
      </Link>
      <img src={flags.svg} alt="" />
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
      />
    </div>
  );
}

export default Sidebar;
