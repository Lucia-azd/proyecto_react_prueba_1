import React from "react";
import "./NavBar.css";
import Carrito from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h1>iStore</h1>
            <div className= "links-nav">
                <ul>
                    <li>iPhone</li>
                    <li>Mac</li>
                    <li>iPad</li>
                </ul>
            </div>
            <div>
                <Carrito />
            </div>
        </nav>
    );
};

export default NavBar;