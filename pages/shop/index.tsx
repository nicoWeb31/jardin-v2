import React from "react";
import TitreSecondary from "../../components/Titre";

const shop: React.FC = () => {
    return (
        <>
            <main className="container-page shopPage">
                <TitreSecondary>Le marché</TitreSecondary>

                <div className="presentation">
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
                        la culture sur sol vivant est l’axe principale de nos
                        réflexions afin de préserver la fertilité du sol et de
                        vous offrir le meilleur chaque saison.
                    </p>
                </div>

                <div className="presentation">
                    <h4>Les Plans :</h4>
                    <div className="shopCard">
                        <p>
                            La liste des plants en précommandes est
                            téléchargeable ici.
                        </p>
                        <img src="/images/semis.jpg" alt="semis" />
                    </div>
                </div>

                <div className="presentation">
                    <h4>Les paniers :</h4>
                    <div className="shopCard">
                        <p>
                            Désolé la saison 2021 des paniers est déjà complète
                            ! Rdv début 2022 pour effectuer vos réservations (et
                            promis nous augmenterons le nombre de nos paniers
                            disponibles ! )
                        </p>
                        <img src="/images/panier.jpg" alt="panier" />
                    </div>
                </div>

                <div className="presentation">
                    <h4>Les surplus :</h4>
                    <div className="shopCard">
                        <p>
                            En fonction des récoltes, retrouvez ici les produits
                            disponibles chaque lundi.
                        </p>
                        <img src="images/surplus.jpg" alt="surplus" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default shop;
