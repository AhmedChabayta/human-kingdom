import Enter from "../components/Enter";
import RandomHistoryFact from "../components/Widgets/RandomHistoryFact";
import Widgets from "../components/Widgets/Widgets";

export default function Home({ data }) {
  // const countries = data.map((country) => country);
  return (
    <div className="flex min-w-screen h-screen overflow-hidden bg-gray-900">
      <div className="flex flex-col h-full">
        <Enter />
        <RandomHistoryFact />
      </div>
      <div className="w-[30vw]">
        <Widgets />
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://restcountries.com/v3.1/all`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
