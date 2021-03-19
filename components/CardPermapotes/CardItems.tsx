import React from "react";
import { Permapotes } from "../../interface/interface";

interface CardItemsProps {
    pote: Permapotes;
}

const CardItems: React.FC<CardItemsProps> = ({ pote }) => {
    return (
        <div className="__card-content">
            <div className="card">
            <img src={pote.image} className="card-media" />
            <div className="card-details">
                <h2 className="card-head">{pote.name}</h2>
                <p>{pote.description}</p>
            </div>

            </div>
        </div>
    );
};

export default CardItems;
