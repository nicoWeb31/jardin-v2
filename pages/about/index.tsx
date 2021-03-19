import React from "react";
import TitreSecondary from "../../components/Titre";

const about: React.FC = () => {
    return (
        <>
            <main className="__about-content">
                <TitreSecondary>Qui Somme nous ?</TitreSecondary>

                <div className="presentation asso">
                    <div className="presentation__text">
                        {/* <h3 className="heading-tertiary u-margin-bottom-small">
                                Bienvenue !
                            </h3> */}
                        <p>
                            Nous c’est Adrien, Jeremy, Marjory, Matthieu et
                            Nicolas ! Avant tout une bande de copains et ce
                            depuis nombreuses années. Chacun de son côté ayant
                            pris conscient du bien-fondé de la nourriture saine,
                            bio et respectueuse de la nature, et tous adhérents
                            de la pensée et de l’art de vivre en lien avec la
                            permaculture, nous nous sommes dit : pourquoi ne pas
                            créer un lieu collectif où nous pourrions partager
                            nos savoirs autour d’un potager, expérimenter et
                            progresser ensemble ? Une fois la décision prise,
                            nous avons choisi tout naturellement de nous établir
                            chez l’un des notre, plus précisément chez deux des
                            notre, Marjory et Nicolas, à Montespan au coeur du
                            Comminges. Durant 2 saisons, nous avons préparé,
                            greliné, amendé, planté, arrosé, désherbé, récolté
                            le fruit de notre travail, ceci afin de faire notre
                            propre expérience et d’évaluer nos besoins et nos
                            capacités. Et tout cela de manière la plus
                            respectueuse de l’environnement, la plus naturelle
                            possible et toujours sans intrant chimique. 2021
                            sera notre saison de lancement ! En parallèle de nos
                            activités professionnelles, nous allons tester notre
                            capacité de production, à petite échelle pour
                            commencer, avec nos premiers paniers hebdomadaires
                            ainsi que la vente de plants de légumes en
                            précommande. Nous donnerons le meilleur de notre
                            potager, le meilleur de nous ! A bientôt !
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default about;
