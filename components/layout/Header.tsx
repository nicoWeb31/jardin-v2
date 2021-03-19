import React from "react";
import BtnPrimary from "../Btn/BtnPrimary";



const Header: React.FC = () => {
    return (
        <header className="header ">
            <div className="header__logo-box">

                    <i className="fas fa-home fa-3x header__logo"></i>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Jardin de la joualle</span>
                    {/* <span className="heading-primary--secondary">
                        Pour 
                    </span> */}
                </h1>
                {/* <BtnPrimary>Réalisation</BtnPrimary> */}
            </div>
        </header>
    );
};

export default Header;
