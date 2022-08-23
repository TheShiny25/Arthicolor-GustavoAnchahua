import React from "react";
import CartWidget from "./cartWidget";
import './navbar.css';


const NavbarPrincipal = ()=>{
return (
    <div className="containerNav row">
        <div className="logoPrincipal">
            <div className="col-lg-3">
                <h1>Arthi<strong>color</strong></h1>
            </div>
            <div className="col-lg-7">
                Zona Buscador
            </div>
            <div className="col-lg-2">
                <CartWidget/>
            </div>
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