import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {

    return (
        <footer>
            <div class="contenedor">
                <Link to="/" className="h1-footer">
                    iStore
                </Link>
                <div className="links-footer">
                    <div className="links-istore">
                        <ul>
                            <p className="titulo-istore">iStore</p>
                            <li className="link-istore"><Link to="/">¿Quiénes somos?</Link></li>
                            <li className="link-istore"><Link to="/">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="links-soporte">
                        <ul>
                            <p className="titulo-soporte">Soporte</p>
                            <li className="link-soporte"><Link to="/">Preguntas frecuentes</Link></li>
                            <li className="link-soporte"><Link to="/">Términos y condiciones</Link></li>
                            <li className="link-soporte"><Link to="/">Promociones vigentes</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="redes">
                    <p className="titulo-redes">Redes</p>
                    <a href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/" target="blank"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
