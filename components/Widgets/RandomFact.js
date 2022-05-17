/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomFact() {
  const [fact, setFact] = useState();
  const getFact = () => {
    const options = {
      url: "https://api.api-ninjas.com/v1/quotes?category=history",
      headers: {
        "X-Api-Key": "RMUG2oXQAp9fCkzeRZ02YA==umrS0mKwnSHcN0c1",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setFact(response);
        return;
      })
      .catch(function (error) {
        console.error(error);
      });
    return;
  };

  useEffect(() => {
    getFact();
    return;
  }, []);
  return (
    <>
      {fact
        ? fact.data.map((item, i) => (
            <div
              className="flex flex-col items-start justify-start w-[20vw]"
              key={i}
            >
              <h1 className="text-blue-500 text-4xl">{item.author}</h1>
              <p className="text-lg text-white text-left">"{item.quote}"</p>
            </div>
          ))
        : "Loading"}
    </>
  );
}

export default RandomFact;
