import React from "react";
import style from './btnPrimary.module.scss'; 

interface BtnPrimaryProps {
    children: React.ReactNode;
}

const ButtonP: React.FC<BtnPrimaryProps> = ({ children }) => {
    return <div className={style.btnContent}>{children}</div>;
};

export default ButtonP;
