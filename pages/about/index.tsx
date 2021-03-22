import React from "react";
import { CardList } from "../../components/CardPermapotes/cardList/CardList";
import TitreSecondary from "../../components/Titre";
import { permapotes } from "../../data/dataPermapote";

const about: React.FC = () => {
    const permas = permapotes;
    return (
        <>
            <main className="container-page">
                <TitreSecondary>Qui sommes-nous ?</TitreSecondary>

                <div className="presentation">
                    <div className="presentation__text">
                        {/* <h3 className="heading-tertiary u-margin-bottom-small">
                                Bienvenue !
                            </h3> */}
                        <p>
                            Nous c’est : Adrien, Jérémy, Marjory, Matthieu et
                            Nicolas ! Avant tout une bande de copains et ce
                            depuis de nombreuses années.
                        </p>
                        <p>
                            Chacun de son côté ayant pris conscience du
                            bien-fondé de la nourriture saine, bio et
                            respectueuse de la nature, et tous adhérents de la
                            pensée et de l’art de vivre en lien avec la
                            permaculture, nous nous sommes dit : pourquoi ne pas
                            créer un lieu collectif où nous pourrions partager
                            nos savoirs autour d’un potager, expérimenter et
                            progresser ensemble ? Une fois la décision prise,
                            nous avons choisi tout naturellement de nous établir
                            chez l’un des notre, plus précisément chez deux des
                            notre, Marjory et Nicolas, à Montespan, au coeur du
                            Comminges.
                        </p>
                        <p>
                            Durant 2 saisons, nous avons préparé, greliné,
                            amendé, planté, arrosé, désherbé, récolté le fruit
                            de notre travail, ceci afin de faire notre propre
                            expérience et d’évaluer nos besoins et nos
                            capacités. Et tout cela de manière la plus
                            respectueuse de l’environnement, la plus naturelle
                            possible et toujours sans intrant chimique.
                        </p>
                        <p>
                            2021 sera notre saison de lancement ! En parallèle
                            de nos activités professionnelles, nous allons
                            tester notre capacité de production, à petite
                            échelle pour commencer, avec nos premiers paniers
                            hebdomadaires ainsi que la vente de plants de
                            légumes en précommande. Nous donnerons le meilleur
                            de notre potager, le meilleur de nous !</p>
                            <p>A bientôt !
                        </p>
                    </div>
                </div>
                <div className="presentation">
                    <CardList cardList={permas} />
                </div>
            </main>
        </>
    );
};

export default about;
