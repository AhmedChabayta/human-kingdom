import React from "react";
import quotes from "../../womenQuotes.json";

function WomenQuotes() {
  const data = quotes.map(({ i, author, quote }) => {
    return (
      <div className="" key={i}>
        <p className="text-blue-500 text-2xl font-bold">{author}</p>
        <p className="text-white">{quote}</p>
      </div>
    );
  });
  return (
    <div className="prose prose-invert">
     {data[[Math.floor(Math.random() * data.length - 1 + 1)]]}
    </div>
  );
}

export default WomenQuotes;
