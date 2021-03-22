import React from "react";
import { Permapotes } from "../../../interface/interface";
import CardItems from "../cardItem/CardItems";

interface CardListProps {
    cardList: Permapotes[];
}

export const CardList: React.FC<CardListProps> = ({ cardList }) => {


    return (
        <div className="__card-list">
            {cardList.map((pote) => {
                return <CardItems pote={pote} key={pote.name} />;
            })}
        </div>
    );
};
