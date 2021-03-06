import React from "react";
import TitreSecondary from "../../components/titre/Titre";
import style from './contact.module.scss';

const contact: React.FC = () => {
    return (
        <>
        <main className={style.__contactContainer}>
            <img src='/images/logo.png' alt="logo" className={style.logoImg}/>
            <TitreSecondary>Contact</TitreSecondary>

            <div className="modale modalePhone">
                <p>
                    - Vous pouvez nous contacter à l'adresse mail suivante :
                    jardindelajoualle@gmail.com
                </p>
                <p>- Ou au numéro suivant : 06.60.20.72.70</p>
            </div>
        </main>
        </>
    );
};

export default contact;
