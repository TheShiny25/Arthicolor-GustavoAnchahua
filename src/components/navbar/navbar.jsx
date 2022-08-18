import React from "react";
import './navbar.css';

const NavbarPrincipal = ()=>{
return (
    <div className="containerNav row">
        <div className="logoPrincipal">
            <h1>Arthi<strong>color</strong></h1>
        </div>
        <div className="contentNav">
            <ul>
                <li>
                    <a href="#" target="_top">Tecnología</a>
                </li>
                <li className="barra">
                    <span>|</span>
                </li>
                <li>
                    <a href="#" target="_top">Electrodoméstico</a>
                </li>
                <li className="barra">
                    <span>|</span>
                </li>
                <li>
                    <a href="#" target="_top">Hogar</a>
                </li>
                <li className="barra">
                    <span>|</span>
                </li>
                <li>
                    <a href="#" target="_top">Deportes</a>
                </li>
                <li className="barra">
                    <span>|</span>
                </li>
                <li>
                    <a href="#" target="_top">Belleza</a>
                </li>
            </ul>
        </div>
    </div>
);
}

export default NavbarPrincipal;