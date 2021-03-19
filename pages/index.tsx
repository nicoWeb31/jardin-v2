import Head from "next/head";
import TitreSecondary from "../components/Titre";

export default function Home() {
    return (
        <div className="__container">
            <Head>
                <title>Jardin de la joualle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="homePageContent ">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="/videos/home.mp4" type="video/mp4" />
                        your Browser is not supported !
                    </video>
                </div>
                <TitreSecondary>Bienvenue !</TitreSecondary>

                <div className="rowGrid">
                    <div className="presentation asso">
                        <div className="presentation__text">
                            {/* <h3 className="heading-tertiary u-margin-bottom-small">
                                Bienvenue !
                            </h3> */}
                            <p>
                                Bienvenue dans notre jardin-potager. Ici vous
                                trouverez de bons produits frais et locaux.
                                Notre système de production est directement
                                inspiré des principes de la permaculture et de
                                l’agriculture bio-intensive c’est-à-dire dans le
                                respect de la nature et de la biodiversité.
                                N’hésitez plus à visiter notre site pour faire
                                plus ample connaissance et découvrez nos
                                produits mais aussi nos jardiniers !
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
