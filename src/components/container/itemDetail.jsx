import React, { useState, useEffect } from 'react';
import ItemCount from './itemCount';
import './itemDetail.css';

const ItemDetail = ({ item: { image, title, description, price, rating } }) => {
    const { count } = rating

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="imagenPrincipal">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bloqProducto">
                        <div className="titulo">
                            <h2>{title}</h2>
                        </div>
                        <div className="descripcion">
                            <p>{description}</p>
                        </div>
                        <div className="price">
                            <span>{price}</span>
                        </div>
                        <ItemCount stocks={count} initial='0' />
                        <div className="addCartPro">Agregar Carrito</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;