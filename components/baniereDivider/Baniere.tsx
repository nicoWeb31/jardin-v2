import React from "react";
import style from './baniereDivider.style.module.scss';

interface BaniereProps {
    message: string;
    // btnMessage: string | null; 
    
}

const Baniere:React.FC<BaniereProps> = ({ message}) => {
    return (
        <div className={style.homeBanniere}>
            <div className={style.centerDiv}>
                <h3 className={style.__heading}>
                    {message}
                </h3>
                {/* {
                    btnMessage && <btnPrimary linkTo="/contact#hautPageContact"> {btnMessage}</btnPrimary>
                    
                } */}
            
            </div>
        </div>
    );
};

export default Baniere;