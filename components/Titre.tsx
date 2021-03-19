import React from "react";


interface TitreSecondaryProps {
    children: React.ReactNode;
}


const TitreSecondary : React.FC <TitreSecondaryProps> = ({ children }) => {


    return (
        <div className="u-center-text">
            <h2 className="heading-secondary">{children}</h2>
        </div>
    );
};

export default TitreSecondary;