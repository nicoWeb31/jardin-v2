import Head from "next/head";
import TitreSecondary from "../components/Titre";
import style from './homePage.module.scss';

export default function Home() {
    return (
        <div className="__container">
            <Head>
                <title>Jardin de la joualle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={style.homePageContent}>
                <div className={style.bgVideo}>
                    <video className={style.bgVideoCont} autoPlay muted loop>
                        <source src="/videos/home.mp4" type="video/mp4" />
                        your Browser is not supported !
                    </video>
                </div>
                <TitreSecondary>Bienvenue </TitreSecondary>

                <div className="">
                    <div className="modale asso">
                        <div className="presentation__text">
                            {/* <h3 className="heading-tertiary u-margin-bottom-small">
                                Bienvenue !
                            </h3> */}
                            <p>
                                Bienvenue dans notre jardin-potager. Ici vous
                                trouverez de bons produits frais et locaux.
                                Nous avons fait le choix d'un système de culture directement
                                inspiré des principes de la permaculture et de
                                l’agriculture bio-intensive, c’est-à-dire dans le
                                respect de la nature et de la biodiversité.
                                N’hésitez plus à visiter notre site pour faire
                                plus amples connaissances et découvrez nos
                                produits mais aussi nos jardiniers !
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
