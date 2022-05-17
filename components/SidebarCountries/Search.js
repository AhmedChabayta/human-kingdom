/* eslint-disable @next/next/no-img-element */
import { Autocomplete, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

function Search({ name, names, flags }) {
  return (
    <div className="">
      <Autocomplete
        style={{ height: "100%", width: "100%" }}
        elevation={0}
        id="free-solo-2-demo"
        options={name.map((option) => option.common)}
        renderOption={(option, i) => {
          return (
            <div
              key={i}
              className="bg-gray-900 items-start text-blue-500 w-full h-[100%] hover:bg-blue-400 hover:text-white p-5"
            >
              <Link href={`/Countries/${option.key}`}>
                <div className="flex flex-col cursor-pointer">
                  <li className="list-none group">
                    <span className="break-words">
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
                backgroundColor: "#111827",
                textAlign: "center",
                display: "flex",
                width: "full",
                height: "full",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                padding: 1,
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: 0 },
                  outline: "none",
                  backgroundColor: "#111827",
                  color: "#f97316",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: 0,
                    outline: "none",
                    border: "orange",
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
