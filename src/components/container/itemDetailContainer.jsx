import React, { useState, useEffect } from 'react'
import ItemDetail from './itemDetail';
import LoandingInfo from './loanding';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [productDetail, setProductDetail] = useState([]);

    const getProductID = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/1');
            const data = await response.json();
            setProductDetail(data);
            setLoading(false);
        } catch (error) {
            console.log("error " + error);
        }
    }
    useEffect(() => {
        getProductID();
    }, []);

    return (
        <>
            {
                (loading) ? <LoandingInfo/> :
                    <ItemDetail item={productDetail} />
            }
        </>

    );
}

export default ItemDetailContainer;

