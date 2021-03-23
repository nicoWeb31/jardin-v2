import React from "react";
import style from './header.module.scss';




const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logoBox}>
            <img src='/images/logo.png' alt="logo" className={style.logoImg}/>


                    <i className="fas fa-home fa-3x header__logo"></i>
            </div>
            <div className={style.textBox}>
                <h1 className={style.headingPrimary}>
                    <span className={style.headingPrimaryMain}>Jardin de la joualle</span>
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
