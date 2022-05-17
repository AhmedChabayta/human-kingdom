import Enter from "../components/Enter";
import RandomHistoryFact from "../components/Widgets/RandomHistoryFact";
import Widgets from "../components/Widgets/Widgets";
import { images } from "../ImageList";

export default function Home() {
  // const countries = data.map((country) => country);
  return (
    <div className="flex h-[100vh] w-[100%] bg-gray-900">
      <div className="flex flex-col w-[90vw] ">
        <Enter />
        <RandomHistoryFact />
      </div>
      <div className="flex items-end">
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
