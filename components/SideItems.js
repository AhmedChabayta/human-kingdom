/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion
    sx={{ backgroundColor: "transparent" }}
    disableGutters
    {...props}
  />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    sx={{ color: "black", backgroundColor: "white" }}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "black",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: 0,
  color: "black",
}));

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
  const [forcedExpand, setForcedExpand] = React.useState(true);
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

  const border = borders ? borders : "none";
  return (
    <div className="flex flex-col overflow-scroll h-screen m-0">
      <Accordion
        defaultExpanded={true}
        elevation={0}
        className="GENERAL"
        style={{ borderRadius: "0px", border: 0 }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span className=" "></span>
          <h1 className="">General Information</h1>
        </AccordionSummary>
        <span>
          <AccordionDetails>
            <span className=" ">Population:</span>
            <h2> {population}</h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">Official Language:</span>
            <h2> {officialLanguage} </h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">Official Name: </span>
            <h2>{officialName} </h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">
              Currency:{" "}
              <span className="font-san-serif  font-black">{` ${currency} `}</span>
            </span>
            <h2>{` ${currencyName} `}</h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">Official Native Name:</span>
            <h2 dir={officialLanguage === "Arabic" ? "rtl" : "ltr"}>
              {" "}
              {officialNativeName}{" "}
            </h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">Common Native Name: </span>
            <h2 dir={officialLanguage === "Arabic" ? "rtl" : "ltr"}>
              {commonNativeName}{" "}
            </h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">Continent: </span>
            <h2>{continents} </h2>
          </AccordionDetails>
          <AccordionDetails>
            <span className=" ">Capital:</span>
            <h2> {capital} </h2>
          </AccordionDetails>

          <AccordionDetails>
            <span className=" ">Start of week:</span>
            <h2> {startOfWeek} </h2>
          </AccordionDetails>
        </span>
      </Accordion>

      <Accordion
        elevation={0}
        className="GEOGRAPHICS"
        style={{ borderRadius: 0 }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h1 className="">Geographics</h1>
        </AccordionSummary>
        <AccordionDetails>
          <span className=" ">Area:</span>
          <h2> {area} km^2</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className=" ">Continent:</span>
          <h2> {continents} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className=" ">Subregion:</span>
          <h2> {subregion} </h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className=" ">Borders: </span>
          <h2> {` ${border} `}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className=" ">Population: </span>
          <h2>{population}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className=" ">TimeZone: </span>
          <h2 className="break-words">{` ${timezones} `}</h2>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        style={{ borderRadius: "0px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <h1 className="">Status</h1>
        </AccordionSummary>
        <AccordionDetails>
          <span className=" ">Independence:</span>
          <h2> {status}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span className="flex place-items-center  ">UN Member:</span>
          <span className="flex items-center justify-center">
            {UN ? <img className="w-44" src={UN_logo_URL} alt="" /> : ""}
          </span>
        </AccordionDetails>
        <AccordionDetails>
          <span className="flex place-items-center  ">Independence:</span>
          <h2> {status}</h2>
        </AccordionDetails>
        <AccordionDetails>
          <span>
            <h2> Coat of Arms: </h2>
          </span>
          <span className="flex items-center justify-center">
            <img className="w-44" src={coatOfArms.svg} alt="" />
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
