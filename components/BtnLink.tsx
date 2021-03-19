import React, { useState, useEffect } from "react";
import Link from "next/link";

const BtnNav : React.FC = () => {
    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        setToggle(!toggle);
    };

    // useEffect(()=>{

    // },[toggleButton])

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    className="navigation__checkbox"
                    id="navi-toggle"
                    checked={toggle}
                    onClick={toggleButton}
                    // onChange={e=>setToggle(!toggle)}

                />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon" aria-hidden="true">
                        &nbsp;
                    </span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/">
                                <a className="navigation__link">Accueil</a>
                            </Link>
                        </li>
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/about">
                                <a className="navigation__link">
                                    Qui sommes-nous ?
                                </a>
                            </Link>
                        </li>
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/shop">
                                <a className="navigation__link">le Marché</a>
                            </Link>
                        </li>
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link href="/contact">
                                <a className="navigation__link">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BtnNav;
