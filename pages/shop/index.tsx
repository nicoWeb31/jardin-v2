import React, { useEffect, useState } from "react";
import TitreSecondary from "../../components/titre/Titre";
import style from "./shopPage.module.scss";
import Image from "next/image";

const shop: React.FC = () => {

    const [screenWidth,setScreenWidth] = useState<number>();

    const imgwidth = screenWidth && screenWidth < 400 ? 500 : 500;
    const imgheight = screenWidth && screenWidth < 400 ? 500 : 500;


    useEffect(() => {
        console.log(window.innerWidth);
        setScreenWidth(window.innerWidth);
    }, []);

    return (
        <>
            <main className={`container-page ${style.shopPage}`}>
                <TitreSecondary>Le marché</TitreSecondary>

                <img
                    src="/images/logo.png"
                    alt="logo"
                    className={style.logoImg}
                />
                {/* <Image
                    src={`/images/logo.png`}
                    alt={`logo`}
                    width={340}
                    height={160}
                    className={style.logoImg}
                /> */}

                <div className="modale modalePhone">
                    <h4>
                        Découvrez ici tous les produits que nous proposons à la
                        vente !{" "}
                    </h4>
                    <p>
                        Toute notre production est issue de semences paysannes,
                        bio et reproductibles. Nous cultivons au plus proche du
                        cycle naturel, nous suivons le rythme des saisons avec
                        leurs avantages et leurs inconvénients, nous abordons le
                        potager avec le plus grand respect de la biodiversité et
                        la culture sur sol vivant est l’axe principal de nos
                        réflexions afin de préserver la fertilité du sol et de
                        vous offrir le meilleur chaque saison.
                    </p>
                </div>

                <div className="modale modalePhone">
                    <h4>Les Plants :</h4>
                    <div className={style.shopCard}>
                        <div className={style.blockText}>
                            <p>
                                La liste des plants en précommandes est
                                téléchargeable
                                <a
                                    href="/pdf/liste-plan-vente.pdf"
                                    download="pdf-vente-plants"
                                >
                                    <span> ici</span>.
                                </a>
                            </p>
                        </div>

                        <div className={style.blockImage}>
                            {/* <img src="/images/semis.jpg" alt="semis" /> */}
                            <Image
                                src="/images/semis.jpg"
                                alt="semis"
                                width={imgwidth}
                                height={imgheight}
                            />
                        </div>
                    </div>
                </div>

                <div className="modale modalePhone">
                    <h4>Les paniers :</h4>
                    <div className={style.shopCard}>
                        <div className={style.blockText}>
                            <p>
                                Désolé la saison 2021 des paniers est déjà
                                complète ! Rdv début 2022 pour effectuer vos
                                réservations (et promis nous augmenterons le
                                nombre de nos paniers disponibles ! )
                            </p>
                        </div>
                        {/* <img src="/images/panier.jpg" alt="panier" /> */}
                        <Image
                            src="/images/panier.jpg"
                            alt="panier"
                            width={imgwidth}
                            height={imgheight}
                        />
                    </div>
                </div>

                <div className="modale modalePhone">
                    <h4>Les surplus :</h4>
                    <div className={style.shopCard}>
                        <div className={style.blockText}>
                            <p>
                                En fonction des récoltes, retrouvez ici les
                                produits disponibles chaque lundi.
                            </p>
                            {/* <img src="images/surplus.jpg" alt="surplus" /> */}
                        </div>
                        <Image
                            src="/images/surplus.jpg"
                            alt="surplus"
                            width={imgwidth}
                            height={imgheight}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default shop;
