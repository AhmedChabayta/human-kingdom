import { Autocomplete, TextField } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CountriesGrid from "../components/CountriesGrid";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const countries = data.map((country) => country);
  return <CountriesGrid countries={countries} />;
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
