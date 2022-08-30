import React, { useState, useEffect } from "react";
import ItemProduct from "./itemProduct";

const ItemListContainer = (greeting) => {

    const [productItem, setProductItem] = useState([]);

    const getProductAll = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductItem(data);
        } catch (error) {
            console.log("Error =>" + error);
        }
    }
    useEffect(() => {
        getProductAll();
    },[]);

    return (
        <div className="container">
            <p>Bienvenido a mi tienda virtual, {greeting.contenido}</p>
            <div className="row listProducts">
                {productItem.map(product =>
                    <ItemProduct key={product.id} itemProduct={product}/>
                )}
            </div>
        </div>
    );
}

export default ItemListContainer