import React from "react";
import { Permapotes } from "../../../interface/interface";
import style from './cardItem.module.scss';


interface CardItemsProps {
    pote: Permapotes;
}

const CardItems: React.FC<CardItemsProps> = ({ pote }) => {
    return (
        <div className={style.__cardContent}>
            <div className={style.card}>
            <img src={pote.image} className={style.cardMedia} />
            <div className={style.cardDetails}>
                <h2 className="card-head">{pote.name}</h2>
                <p>{pote.description}</p>
            </div>

            </div>
        </div>
    );
};

export default CardItems;
