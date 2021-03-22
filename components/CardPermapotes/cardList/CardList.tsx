import React from "react";
import { Permapotes } from "../../../interface/interface";
import CardItems from "../cardItem/CardItems";
import style from './cardlist.module.scss'

interface CardListProps {
    cardList: Permapotes[];
}

export const CardList: React.FC<CardListProps> = ({ cardList }) => {


    return (
        <div className={style.__cardList}>
            {cardList.map((pote) => {
                return <CardItems pote={pote} key={pote.name} />;
            })}
        </div>
    );
};
