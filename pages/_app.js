import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-clock/dist/Clock.css";
import "../styles/Calendar.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
