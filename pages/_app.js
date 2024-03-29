import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "react-clock/dist/Clock.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
