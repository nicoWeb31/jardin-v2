import { AppProps } from "next/dist/next-server/lib/router/router";
import BtnNav from "../components/BtnNav/BtnLink";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";

import "../styles/globals.scss";



function MyApp({ Component, pageProps } : AppProps) {
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
