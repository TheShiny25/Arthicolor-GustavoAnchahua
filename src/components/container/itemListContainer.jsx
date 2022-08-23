import React from "react";

const ItemListContainer = (greeting)=>{
    return (
    <div className="container">
        <p>Bienvenido a mi tienda virtual, {greeting.contenido}</p>
    </div>
    );
}

export default ItemListContainer