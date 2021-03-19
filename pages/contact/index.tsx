import React from "react";
import TitreSecondary from "../../components/Titre";

const contact: React.FC = () => {
    return (
        <>
        <main className="container-page">
            <TitreSecondary>Contact</TitreSecondary>

            <div className="presentation">
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
