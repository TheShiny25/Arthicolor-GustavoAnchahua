import React, { useState, useEffect } from "react";
import CartWidget from "./cartWidget";
import './navbar.css';


const NavbarPrincipal = () => {

    const [category, setCategory] = useState([]);

    const getCategoryAll = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    useEffect(() => {
        getCategoryAll();
    }, []);

    return (
        <div className="containerNav row">
            <div className="logoPrincipal">
                <div className="col-lg-3">
                    <h1>Arthi<strong>color</strong></h1>
                </div>
                <div className="col-lg-7">

                </div>
                <div className="col-lg-2">
                    <CartWidget />
                </div>
            </div>
            <div className="contentNav">
                <ul>
                    {category.map(category=>
                        
                            <li key={category}>
                                <a href={category} target="_top">{category}</a>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default NavbarPrincipal;