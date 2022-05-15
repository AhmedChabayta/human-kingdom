/* eslint-disable @next/next/no-img-element */
import { Autocomplete, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Search({ name, names, flags }) {
  const [search, setSearch] = useState([{}]);

  const native = names.nativeName;
  return (
    <div className="text-white">
      <Autocomplete
        variant="outlined"
        elevation={0}
        id="free-solo-2-demo"
        options={name.map((option) => option.common)}
        renderOption={(option, i) => {
          return (
            <div key={i} className="bg-transparent text-black w-full">
              <Link href={`/Countries/${option.key}`}>
                <div className="flex items-center h-10 cursor-pointer">
                  <li className="list-none group">
                    <span className=" p-5">
                      <a className="">{option.key}</a>
                    </span>
                  </li>
                </div>
              </Link>
            </div>
          );
        }}
        renderInput={(params) => (
          <div style={{ outline: "none" }}>
            <TextField
              placeholder={`${names.official} ...`}
              variant="outlined"
              sx={{
                backgroundColor: "#ffffff",
                textAlign: "center",
                display: "flex",
                width: "full",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                padding: 1,
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: 0 },
                  outline: "none",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "transparent",
                    border: 0,
                    outline: "none",
                  },
                },
              }}
              {...params}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          </div>
        )}
      />
    </div>
  );
}
export default Search;
