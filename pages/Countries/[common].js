import axios from "axios";
import { useRouter } from "next/router";
import Details from "../../components/Details";
import Sidebar from "../../components/Sidebar";

function Countries({ country }) {
  const countries = country.map((country) => country);
  const router = useRouter();
  const common = router.query.common;

  return (
    <div className="">
      {countries.map(
        ({
          flags,
          name,
          languages,
          population,
          i,
          area,
          timezones,
          status,
          capital,
          borders,
          independent,
          startOfWeek,
          subregion,
          unMember,
          continents,
          coatOfArms,
          currencies,
        }) => (
          <div className="flex overflow-hidden h-screen" key={name.official}>
            <Sidebar
              currencies={currencies}
              area={area}
              status={status}
              flags={flags}
              name={name}
              language={
                languages
                  ? languages.spa ||
                    languages.ara ||
                    languages.eng ||
                    languages.ukr ||
                    languages.grn ||
                    languages.grn ||
                    languages.fra ||
                    languages.cha ||
                    languages.kat ||
                    languages.bjz ||
                    languages.por ||
                    languages.mon ||
                    languages.zho ||
                    languages.bar ||
                    languages.dan ||
                    languages.cal ||
                    languages.ell ||
                    languages.rus ||
                    languages.ben ||
                    languages.afr ||
                    languages.hrv ||
                    languages.isl ||
                    languages.swe ||
                    languages.nor ||
                    languages.khm ||
                    languages.mkd ||
                    languages.fas ||
                    languages.cat ||
                    languages.sqi ||
                    languages.pol ||
                    languages.amh ||
                    languages.deu ||
                    languages.aze ||
                    languages.nld ||
                    languages.nep ||
                    languages.kir ||
                    languages.ita ||
                    languages.dzo ||
                    languages.nno ||
                    languages.lit ||
                    languages.ber ||
                    languages.kaz ||
                    languages.slk ||
                    languages.lav ||
                    languages.prs ||
                    languages.srp ||
                    languages.bis ||
                    languages.bos ||
                    languages.aym ||
                    languages.tha ||
                    languages.kor ||
                    languages.hye ||
                    languages.ces ||
                    languages.mya ||
                    languages.ron ||
                    languages.tur ||
                    languages.deu ||
                    languages.slv ||
                    languages.hun ||
                    languages.est ||
                    languages.bel ||
                    languages.sin ||
                    languages.vie ||
                    languages.cnr ||
                    languages.nld ||
                    languages.jpn ||
                    languages.bul ||
                    languages.lao ||
                    languages.fin ||
                    languages.bwg ||
                    languages.kck ||
                    languages.kck ||
                    languages.khi ||
                    languages.div ||
                    languages.crs ||
                    languages.msa ||
                    languages.ind ||
                    languages.kal
                  : ""
              }
              population={population}
              timezones={timezones}
              nativeName={
                name.nativeName
                  ? name.nativeName.ara ||
                    name.nativeName.spa ||
                    name.nativeName.eng ||
                    name.nativeName.ukr ||
                    name.nativeName.grn ||
                    name.nativeName.grn ||
                    name.nativeName.fra ||
                    name.nativeName.cha ||
                    name.nativeName.kat ||
                    name.nativeName.bjz ||
                    name.nativeName.por ||
                    name.nativeName.mon ||
                    name.nativeName.zho ||
                    name.nativeName.bar ||
                    name.nativeName.dan ||
                    name.nativeName.cal ||
                    name.nativeName.ell ||
                    name.nativeName.rus ||
                    name.nativeName.ben ||
                    name.nativeName.afr ||
                    name.nativeName.hrv ||
                    name.nativeName.isl ||
                    name.nativeName.swe ||
                    name.nativeName.nor ||
                    name.nativeName.khm ||
                    name.nativeName.mkd ||
                    name.nativeName.fas ||
                    name.nativeName.cat ||
                    name.nativeName.sqi ||
                    name.nativeName.pol ||
                    name.nativeName.amh ||
                    name.nativeName.deu ||
                    name.nativeName.aze ||
                    name.nativeName.nld ||
                    name.nativeName.nep ||
                    name.nativeName.kir ||
                    name.nativeName.ita ||
                    name.nativeName.dzo ||
                    name.nativeName.nno ||
                    name.nativeName.lit ||
                    name.nativeName.ber ||
                    name.nativeName.kaz ||
                    name.nativeName.slk ||
                    name.nativeName.lav ||
                    name.nativeName.prs ||
                    name.nativeName.srp ||
                    name.nativeName.bis ||
                    name.nativeName.bos ||
                    name.nativeName.aym ||
                    name.nativeName.tha ||
                    name.nativeName.kor ||
                    name.nativeName.hye ||
                    name.nativeName.ces ||
                    name.nativeName.mya ||
                    name.nativeName.ron ||
                    name.nativeName.tur ||
                    name.nativeName.deu ||
                    name.nativeName.slv ||
                    name.nativeName.hun ||
                    name.nativeName.est ||
                    name.nativeName.bel ||
                    name.nativeName.sin ||
                    name.nativeName.vie ||
                    name.nativeName.cnr ||
                    name.nativeName.nld ||
                    name.nativeName.jpn ||
                    name.nativeName.bul ||
                    name.nativeName.lao ||
                    name.nativeName.fin ||
                    name.nativeName.bwg ||
                    name.nativeName.kck ||
                    name.nativeName.kck ||
                    name.nativeName.khi ||
                    name.nativeName.div ||
                    name.nativeName.crs ||
                    name.nativeName.msa ||
                    name.nativeName.ind ||
                    name.nativeName.kal
                  : ""
              }
              capital={capital}
              borders={borders}
              independent={independent}
              startOfWeek={startOfWeek}
              subregion={subregion}
              unMember={unMember}
              continents={continents}
              coatOfArms={coatOfArms}
            />
            <Details flags={flags} />
          </div>
        )
      )}
    </div>
  );
}

export default Countries;
export const getStaticProps = async (context) => {
  const common = context.params.common;
  const res = await fetch(`https://restcountries.com/v3.1/name/${common}`);
  const data = await res.json();
  return {
    props: {
      country: data,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  const countries = data.map((item) => item.name);
  const paths = countries.map((country) => {
    return {
      params: { common: country.common },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
