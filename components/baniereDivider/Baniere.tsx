import React from "react";
import style from './baniereDivider.style.module.scss';

interface BaniereProps {
    message: string;
    // btnMessage: string | null; 
    
}

const BaniereContact:React.FC<BaniereProps> = ({ message}) => {
    return (
        <div className="homeBanniere">
            <div className="u-center-text">
                <h3 className="homeBanniere__heading ">
                    {message}
                </h3>
                {/* {
                    btnMessage && <btnPrimary linkTo="/contact#hautPageContact"> {btnMessage}</btnPrimary>
                    
                } */}
            
            </div>
        </div>
    );
};

export default BaniereContact;