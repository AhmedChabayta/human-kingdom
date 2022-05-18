/* eslint-disable react/no-unescaped-entities */
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomFact() {
  const [fact, setFact] = useState(false);
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
  console.log(fact);
  return (
    <>
      {fact ? (
        fact.data.map((item, i) => (
          <div className="prose prose-invert" key={i}>
            <h2 className='text-blue-500'>Todays Quote: </h2>
            <h1 className="text-blue-500 text-2xl font-bold">{item.author}</h1>
            <p className="text-white text-lg italic">"{item.quote}"</p>
          </div>
        ))
      ) : (
        <Skeleton
          className="bg-orange-500"
          variant="text"
          width={200}
          height={200}
        />
      )}
    </>
  );
}

export default RandomFact;
