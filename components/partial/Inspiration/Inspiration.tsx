import React from "react";
import style from "./inspiration.module.scss";

const Inspiration = () => {
    return (
        <div className={style.inspiContent}>
            <div className={`modale modalePhone ${style.permaculture}`}>
                <h3>La permaculture</h3>
                Le principe de base de la permaculture est de s'inspirer de la
                nature pour les cultures : les espèces sont multiples,
                indigènes, et peuvent interagir entre elles, bien sûr
                insecticides et engrais sont proscrits, et les surfaces sont
                optimisées, ainsi que l'utilisation de l'eau et du soleil.
            </div>

            <div className={`modale modalePhone ${style.permaculture}`}>
                <h3>Les Joualles</h3>
                La joualle (« joala » en occitan) est un système ancestral de
                culture écologique associant sur une même parcelle de la vigne
                poussant sur des arbres fruitiers et plusieurs autres cultures
                intercalaires réalisées entre les rangées d'arbres. Cette
                méthode culturale a été pratiquée en plusieurs régions d'Europe,
                et notamment dans le Sud-Ouest de la France.
            </div>
        </div>
    );
};

export default Inspiration;
