import BtnNav from "../components/BtnLink";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "../styles/globals.scss";



function MyApp({ Component, pageProps }) {
  return (
    <>
    <BtnNav/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
