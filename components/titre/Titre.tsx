import React from "react";
import style from "./titreSecondary.module.scss"


interface TitreSecondaryProps {
    children: React.ReactNode;
}


const TitreSecondary : React.FC <TitreSecondaryProps> = ({ children }) => {


    return (
        <div className="u-center-text">
            <h2 className={style.headingSecondary}>{children}</h2>
        </div>
    );
};

export default TitreSecondary;