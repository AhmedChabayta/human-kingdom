import { Autocomplete, TextField } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CountriesGrid from "../components/CountriesGrid";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const countries = data.map((country) => country);
  return (
    <div className="flex flex-col w-screen h-screen justify-between items-center p-20">
      <h1 className="text-7xl font-black flex self-center justify-self-center p-10 active:text-red-500 ">
        Welcome to the Human Kingdom
      </h1>
      <Link href={`/Countries/Palestine`}>
        <span>
          <h1 className="cursor-pointer before:h-[10px] relative before:w-0 hover:before:w-full before:transition-all before:duration-150 before:ease-linear before:bg-black before:absolute before:bottom-0 before:content-[''] text-9xl font-bold font-san">
            ENTER
          </h1>
        </span>
      </Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
