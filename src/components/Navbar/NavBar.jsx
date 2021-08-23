import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Carrito from "./CartWidget/CartWidget";

const NavBar = () => {

    const categories = [
        {
            id: 1,
            title: 'iPhone'
        },
        {
            id: 2,
            title: 'Mac'
        },
        {
            id: 3,
            title: 'iPad'
        }
    ];

    return (
        <nav>
            <NavLink to="/" className="h1">
                iStore
            </NavLink>
            <div className= "links-nav">
                <ul>
                    {categories.map((cat) => (
                        <NavLink
                            to={`/productos/${cat.title}`}
                            className="links-nav">
                            {cat.title}
                        </NavLink>
                    ))}
                </ul>
            </div>
            <div className="container-info-cart">
                <div>
                    <Link to='/Orders'>
                        <button className="button-orders">Consultar Ordenes</button>
                    </Link>
                </div>
                <Carrito />
            </div>
        </nav>
    );
};

export default NavBar;

