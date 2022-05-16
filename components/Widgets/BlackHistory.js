import axios from "axios";
import React, { useEffect, useState } from "react";

function BlackHistory() {
  const [fact, setFact] = useState({});
  const getFact = async () => {
    const options = {
      method: "GET",
      url: "https://rest.blackhistoryapi.io/fact/random",
      headers: {
        "x-api-key": " Y2hhYmF5c01vbiBNYXkgMTYgMjAyMi",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFact(response);
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
  // if fact is undefined then null otherwise fact.Results
  const facts = fact === undefined ? null : fact.Results;
  console.log(fact.Results);
  return <div>BlackHistory</div>;
}

export default BlackHistory;
