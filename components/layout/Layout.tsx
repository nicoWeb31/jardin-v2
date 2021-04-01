import React, { Fragment } from "react";
import BtnNav from "../BtnNav/BtnLink";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title>Jardin de la joualle</title>
                <meta name="keywords" content="jardin, permaculture, potager, joualle"/>
                <meta
                    name="description"
                    content="Bienvenue dans notre jardin-potager. Ici vous
                                trouverez de bons produits frais et locaux."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0 "
                />
            </Head>
            <BtnNav />
            <Header />

            <main>{children}</main>

            <Footer />
        </Fragment>
    );
};

export default Layout;
