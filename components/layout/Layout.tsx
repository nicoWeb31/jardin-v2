import React, { Fragment } from "react";
import BtnNav from "../BtnNav/BtnLink";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <BtnNav />
            <Header />

            <main>{children}</main>

            <Footer />
        </Fragment>
    );
};

export default Layout;
