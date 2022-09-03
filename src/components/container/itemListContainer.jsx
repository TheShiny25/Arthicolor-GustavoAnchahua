import React, { useState, useEffect } from "react";
import ItemProduct from "./itemProduct";
import LoandingInfo from "./loanding";

const ItemListContainer = (greeting) => {
    const [loading, setLoading] = useState(true);
    const [productItem, setProductItem] = useState([]);

    const getProductAll = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductItem(data);
            setLoading(false);
        } catch (error) {
            console.log("Error =>" + error);
        }
    }
    useEffect(() => {
        getProductAll();
    }, []);

    return (
        <div className="container">
            <p>Bienvenido a mi tienda virtual, {greeting.contenido}</p>
            <div className="row listProducts">
                {
                    (loading) ? <LoandingInfo /> :
                        productItem.map(product =>
                            <ItemProduct key={product.id} itemProduct={product} />
                        )
                }
            </div>
        </div>
    );
}

export default ItemListContainer