import { FactorySharp } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomHistoryFact() {
  const [fact, setFact] = useState();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;
  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setFact(data);
      return data;
    }
    getData();
  }, [url]);
  const facts = fact ? fact.events : null;
  const entries = fact
    ? facts.map((entry, id) => (
        <div className="flex flex-col text-white" key={entry.year}>
          <div className="flex text-9xl text-orange-500 font-sans">
            {entry.year}
          </div>
          <div className="prose prose-sm md:prose-md lg:prose-lg prose-invert">
            <p className="text-5xl text-white font-semibold font-sans">
              {entry.text}
            </p>
            <p className="prose prose-invert text-white text-2xl">
              {facts
                ? entry.pages.map((text, i) => (
                    <div key={i}>
                      <p>{text.extract}</p>
                      <img src={text.thumbnail?.source} alt="" />
                    </div>
                  ))
                : "Loading"}
            </p>
          </div>
        </div>
      ))
    : null;
  return (
    <div className="flex flex-col p-5">
      <div className="text-3xl font-normal">
        <p className="text-white font-bold font-sans">
          Today in <span className="text-blue-500">History:</span>
        </p>
        {fact ? (
          <div>
            <p className="py-2">
              {entries[Math.floor(Math.random() * entries.length - 1)]}
            </p>
          </div>
        ) : (
          <Skeleton variant="rectangular" width={800} height={300} />
        )}
      </div>
    </div>
  );
}

export default RandomHistoryFact;
