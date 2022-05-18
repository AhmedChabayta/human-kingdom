import React from "react";
import influences from "../../influental.json";

function BroughtUsHere() {
  const data = influences.map(({ i, author, quote, image }) => {
    return (
      <div className="w-full" key={i}>
          <h2 className='text-blue-500'>The ones who brought us here</h2>
        <img title={author} src={image} alt="" />
        <p className="text-blue-500 text-2xl font-bold">{author}</p>
      </div>
    );
  });
  return (
    <div className="prose prose-invert">
      {data[[Math.floor(Math.random() * data.length - 1 + 1)]]}
    </div>
  );
}

export default BroughtUsHere;
