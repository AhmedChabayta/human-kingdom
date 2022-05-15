/* eslint-disable @next/next/no-img-element */
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function Search({ name, names, flags }) {
  return (
    <div className="text-white">
      <Autocomplete
        style={{ backgroundColor: "white" }}
        variant="standard"
        elevation={0}
        id="free-solo-2-demo"
        options={name.map((option) => option.common)}
        renderOption={(option, i) => {
          return (
            <div
              key={i}
              className="bg-transparent items-start text-black w-full hover:bg-blue-400 hover:text-white p-5"
            >
              <Link href={`/Countries/${option.key}`}>
                <div className="flex flex-col cursor-pointer">
                  <li className="list-none group">
                    <span className="break-words text-left">
                      <a className="text-center">{option.key}</a>
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
                backgroundColor: "white",
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
