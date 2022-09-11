import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ItemProduct from "./itemProduct";
import LoandingInfo from "./loanding";

const ItemListContainer = (greeting) => {
    let ListParam = useParams();
    const {nomCategory} = ListParam;
    const [loading, setLoading] = useState(true);
    const [productItem, setProductItem] = useState([]);

    const getProductAll = async () => {
        try {
            const URLAPI = 'https://fakestoreapi.com/';
            let URLComplemento ='products';
            if(typeof (nomCategory) !== 'undefined'){
                URLComplemento = 'products/category/'+nomCategory;
            }
            
            const response = await fetch(`${URLAPI + URLComplemento }`);
            const data = await response.json();
            setProductItem(data);
            setLoading(false);
        } catch (error) {
            console.log("Error =>" + error);
        }
    }
    useEffect(() => {
        getProductAll();
    }, [productItem]);

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