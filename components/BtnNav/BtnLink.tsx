import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from './btnNav.module.scss';

const BtnNav : React.FC = () => {
    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        setToggle(!toggle);
    };

    // useEffect(()=>{

    // },[toggleButton])

    return (
        <div className ={style.navigation}>
            <div>
                <input
                    type="checkbox"
                    className={style.navigationCheckbox}
                    id="navi-toggle"
                    checked={toggle}
                    onClick={toggleButton}
                    // onChange={e=>setToggle(!toggle)}

                />
                <label htmlFor="navi-toggle" className={style.navigationBtn}>
                    <span className={style.navigationIcon} aria-hidden="true">
                        &nbsp;
                    </span>
                </label>
                <div className={style.navigationBackground}>&nbsp;</div>
                <nav className={style.navigationNavig}>
                    <ul className={style.navigationList}>
                        <li
                            className={style.navigationItem}
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/">
                                <a className={style.navigationLk}>Accueil</a>
                            </Link>
                        </li>
                        <li
                            className={style.navigationItem}
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/about">
                                <a className={style.navigationLk}>
                                    Qui sommes-nous ?
                                </a>
                            </Link>
                        </li>
                        <li
                            className={style.navigationItem}
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/shop">
                                <a className={style.navigationLk}>le Marché</a>
                            </Link>
                        </li>
                        <li
                            className={style.navigationItem}
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/contact">
                                <a className={style.navigationLk}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BtnNav;
