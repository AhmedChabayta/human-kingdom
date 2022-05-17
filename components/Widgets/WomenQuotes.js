import React from "react";
import quotes from "../../womenQuotes.json";

function WomenQuotes() {
  const data = quotes.map(({ i, author, quote }) => {
    return (
      <div className="text-lg" key={i}>
        <p className="text-4xl text-blue-500">{author}</p>
        <p className="text-lg text-white text-left">{quote}</p>
      </div>
    );
  });
  console.log(data);
  return (
    <div className="text-white text-5xl w-[20vw]">
      <h1>
        {data[[Math.floor(Math.random() * data.length - 1 + 1)]]}
      </h1>
    </div>
  );
}

export default WomenQuotes;
