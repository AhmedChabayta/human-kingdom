import axios from "axios";
import React, { useState, useEffect } from "react";

function AstronomyOfDay() {
  const [astron, setAstron] = useState("");

  const fetchAstron = async () => {
    const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=";
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=H6BoQ1E15lKC3zcaVvU7cDJTW2QHX7HesRGnefZC`
      )
      .then((response) => setAstron(response.data))
      .catch((error) => console.log(error));
    return;
  };
  useEffect(() => {
    fetchAstron();
    return;
  }, []);

  return (
    <div className="prose prose-sm md:prose-md lg:prose-lg prose-invert">
      {" "}
      {astron ? (
        <div className="prose prose-invert">
          <span>
            <h2 className='text-3xl text-blue-500'>Astronomy of the day</h2>
            <img className="" title={astron.title} src={astron.url} alt="" />
          </span>
          <span className="">
            <p className="text-2xl"> {astron.copyright}</p>
            <small>{astron.date}</small>
          </span>
          <p className="text-lg">By {astron.explanation}</p>
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
}

export default AstronomyOfDay;
