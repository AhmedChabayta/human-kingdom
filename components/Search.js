/* eslint-disable @next/next/no-img-element */
import { Autocomplete, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Search({ name, flags }) {
  const [search, setSearch] = useState([{}]);
  useEffect(() => {
    setSearch(name);
  }, [name]);
  return (
    <div className="">
      <Autocomplete
        id="free-solo-2-demo"
        options={name.map((option) => option.common)}
        renderOption={(option, i) => {
          return (
            <Link key={i} href={`/Countries/${option.key}`}>
              <div className="flex items-center h-10 hover:bg-blue-500 hover:text-white cursor-pointer">
                <li className="list-none group">
                  <span className=" p-5">
                    <a className="">{option.key}</a>
                  </span>
                </li>
              </div>
            </Link>
          );
        }}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root.Mui-disabled": {
                "& > fieldset": { border: "1px solid green" },
              },
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </div>
  );
}
export default Search;
