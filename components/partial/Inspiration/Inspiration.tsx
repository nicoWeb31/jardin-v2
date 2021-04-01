import React from "react";
import style from "./inspiration.module.scss";

const Inspiration = () => {
    return (
        <div className={style.inspiContent}>
            <div className={`modale ${style.permaculture}`}>

                <h3>La permaculture</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                fugiat temporibus reiciendis assumenda, dolores voluptatibus
                minus enim numquam eaque animi deserunt distinctio libero saepe
                soluta aut sequi ab placeat vitae veritatis voluptatem at esse
                quam hic. Vitae magni, ipsum quisquam dolorum, autem illo
                recusandae doloremque officia voluptas ad veritatis cumque?
            </div>

            <div className={`modale ${style.permaculture}`}>
                <h3>Les Joualles</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem obcaecati adipisci consequuntur harum eligendi, amet
                quaerat! Perspiciatis ipsam laborum asperiores voluptatum quod
                fugit eligendi nobis dolor, aperiam iusto, quia recusandae?
            </div>
        </div>
    );
};

export default Inspiration;
