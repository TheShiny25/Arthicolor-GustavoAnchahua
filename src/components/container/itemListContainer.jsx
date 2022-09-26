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
            const URLAPI = 'https://dummyjson.com/';
            let URLComplemento ='products';
            if(typeof (nomCategory) !== 'undefined'){
                URLComplemento = 'products/category/'+nomCategory;
            }
            
            const response = await fetch(`${URLAPI + URLComplemento }`);
            const data = await response.json();
            //console.log(data.products);
            setProductItem(data.products);
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
                        productItem.map(products =>
                            <ItemProduct key={products.id} itemProduct={products} />
                        )
                }
            </div>
        </div>
    );
}

export default ItemListContainer