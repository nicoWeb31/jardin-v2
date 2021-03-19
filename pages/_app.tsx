import BtnNav from "../components/BtnLink";
import "../styles/globals.scss";



function MyApp({ Component, pageProps }) {
  return (
    <>
    <BtnNav/>
      <h2>header</h2>
      <Component {...pageProps} />
      <h3>footer</h3>
    </>
  );
}

export default MyApp;
