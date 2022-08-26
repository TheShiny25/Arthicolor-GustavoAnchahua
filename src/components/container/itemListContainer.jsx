import React from "react";
import ItemProduct from "./itemProduct";



const ItemListContainer = (greeting)=>{
    return (
    <div className="container">
        <p>Bienvenido a mi tienda virtual, {greeting.contenido}</p>
        <div className="listProducts">
            <ItemProduct/>
        </div>
    </div>
    );
}

export default ItemListContainer