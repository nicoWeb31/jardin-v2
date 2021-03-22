import React from "react";
import Link from "next/link";
import style from './footer.module.scss'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>
                <div className={style.footer__col1}>
                    <div className={style.footer__logoBox}>
                        <i className="fas fa-laptop-code fa-4x footer__logo"></i>
                    </div>
                    <div className={style.footer__nav}>
                        <ul className={style.footer__list}>
                            <li className={style.footer__item}>
                                <Link href="/">
                                    <a className={style.footer__link}>Accueil</a>
                                </Link>
                            </li>
                            <li className={style.footer__item}>
                                <Link href="/about">
                                    <a className={style.footer__link}>About</a>
                                </Link>
                            </li>
                            <li className={style.footer__item}>
                                <Link href="/contact">
                                    <a className={style.footer__link}>Contact</a>
                                </Link>
                            </li>
                            <li className={style.footer__item}>
                                <Link href="/shop">
                                    <a className={style.footer__link}>Shop</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className={style.footer__contact}>
                        <div className={`${style.footer__contactAdress} ${style.infoBlock}`}>
                            <i className="fa fa-map-marker footer__icone"></i>
                            <p>Impasse Larribeau --</p>
                            <p>31260 Montespan</p>
                        </div>
                        <div className={`${style.footer__contactPhone} ${style.infoBlock}`}>
                            <i className="fa fa-phone footer__icone"></i>
                            <p>06.60.20.72.70</p>
                        </div>
                        <div className={`${style.footer__contactMail} ${style.infoBlock}`}>
                            <i className="fa fa-envelope footer__icone "></i>
                            <p>
                                <Link href="mailto:jardindelajoualle@gmail.com">
                                    <a className={style.footer__link}>
                                    jardindelajoualle@gmail.com

                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className={style.footer__iconeReseau}>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/nicolas-riot"
                            className={style.footer__link}
                        >
                            <i className="fab fa-linkedin-in fa-3x"></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/nicoWeb31"
                            className={style.footer__link}
                        >
                            <i className="fab fa-github fa-3x"></i>
                        </a>
                    </div>

                    <p className={style.footer__copyright}>
                        N'hésitez pas à nous{" "}
                        <Link href="/contact">
                            <a className={style.footer__link}>contacter.</a>
                        </Link>
                    </p>
                    <p className={style.cp__nico}>
                        Copyright &copy; by Riot Nicolas 2020.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
