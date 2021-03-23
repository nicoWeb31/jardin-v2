import { AppProps } from "next/dist/next-server/lib/router/router";
import BtnNav from "../components/BtnNav/BtnLink";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import Layout from "../components/layout/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
