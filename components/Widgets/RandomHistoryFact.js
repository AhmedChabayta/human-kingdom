import { FactorySharp } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomHistoryFact({ data }) {
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
    ? facts.map((entry, i) => (
        <div className="inline-flex flex-col" key={i}>
          <span className="inline-flex">{entry.year}</span>
          <div>
            <p>{entry.text}</p>
          </div>
        </div>
      ))
    : null;
  return (
    <div className="flex flex-col p-5">
      <span className="text-3xl font-normal">
        <p>Today in History:</p>
        {fact
          ? entries[Math.floor(Math.random() * entries.length - 1)]
          : "Loading"}
      </span>
    </div>
  );
}

export default RandomHistoryFact;