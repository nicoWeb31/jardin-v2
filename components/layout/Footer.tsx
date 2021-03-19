import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-12 col-md-12 col-xl-4  footer__col1">
                    <div className="footer__logo-box">
                        <i className="fas fa-laptop-code fa-4x footer__logo"></i>
                    </div>
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link href="/">
                                    <a className="footer__link">Accueil</a>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href="/about">
                                    <a className="footer__link">About</a>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href="/contact">
                                    <a className="footer__link">Contact</a>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href="/shop">
                                    <a className="footer__link">Shop</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-xl-4 ">
                    <div className="footer__contact">
                        <div className="footer__contact--adress info-block">
                            <i className="fa fa-map-marker footer__icone"></i>
                            <p>Impasse Larribeau --</p>
                            <p>31260 Montespan</p>
                        </div>
                        <div className="footer__contact--phone info-block">
                            <i className="fa fa-phone footer__icone"></i>
                            <p>06.60.20.72.70</p>
                        </div>
                        <div className="footer__contact--mail info-block">
                            <i className="fa fa-envelope footer__icone "></i>
                            <p>
                                <Link href="mailto:jardindelajoualle@gmail.com">
                                    <a className="footer__link">
                                    jardindelajoualle@gmail.com

                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-xl-4 ">
                    <div className="footer__iconeReseau d-flex ">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/nicolas-riot"
                            className="footer__link"
                        >
                            <i className="fab fa-linkedin-in fa-3x"></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/nicoWeb31"
                            className="footer__link"
                        >
                            <i className="fab fa-github fa-3x"></i>
                        </a>
                    </div>

                    <p className="footer__copyright">
                        N'hésitez pas à nous{" "}
                        <Link href="/contact">
                            <a className="footer__link">contacter.</a>
                        </Link>
                    </p>
                    <p className="text-center cp__nico">
                        Copyright &copy; by Riot Nicolas 2020.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
