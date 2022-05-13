/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SideItems({
  officialLanguage,
  population,
  officialName,
  officialNativeName,
  commonNativeName,
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
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const UN = unMember.toString();
  const UN_logo_URL =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fun%2Fun_PNG20.png&f=1&nofb=1";

  const currencyName = currencies
    ? Object.values(currencies).map(({ name }) => name)
    : " - ";
  const currency = currencies
    ? Object.values(currencies).map(({ symbol }) => symbol)
    : "";

  return (
    <div
      dir={officialLanguage === "Arabic" ? "rtl" : "ltr"}
      className="space-y-0"
    >
      <Accordion
        className="GENERAL"
        style={{ borderRadius: "0px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span className="font-semibold "></span>
          <h2 className="font-bold">General Information</h2>
        </AccordionSummary>
        <AccordionDetails>
          <span className="font-semibold ">Population:</span>
          <h2> {population}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Official Language:</span>
          <h2> {officialLanguage} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Official Name: </span>
          <h2>{officialName} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">
            Currency:{" "}
            <span className="font-san-serif  font-black">{` ${currency} `}</span>
          </span>
          <h2>{` ${currencyName} `}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Official Native Name:</span>
          <h2> {officialNativeName} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Common Native Name: </span>
          <h2>{commonNativeName} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Continent: </span>
          <h2>{continents} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Capital:</span>
          <h2> {capital} </h2>
        </AccordionDetails>

        <AccordionDetails>
          <span className="font-semibold ">Start of week:</span>
          <h2> {startOfWeek} </h2>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ borderRadius: "0px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h2 className="font-bold">Geographics</h2>
        </AccordionSummary>
        <AccordionDetails>
          <span className="font-semibold ">Area:</span>
          <h2> {area} km^2</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Continent:</span>
          <h2> {continents} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Subregion:</span>
          <h2> {subregion} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Borders: </span>
          {` ${borders} `}
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Population: </span>
          <h2>{population}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">TimeZone: </span>
          <h2>{timezones}</h2>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: "0px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <h1 className="font-bold">Status</h1>
        </AccordionSummary>
        <AccordionDetails>
          <span className="font-semibold ">Independence:</span>
          <h2> {status}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">UN Member:</span>
          <h2>{UN ? <img src={UN_logo_URL} alt="" /> : ""}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="font-semibold ">Independence:</span>
          <h2> {status}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <img src={coatOfArms.svg} alt="" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
