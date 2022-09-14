import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ItemCount from './itemCount';
import './itemDetail.css';

const ItemDetail = ({ item: { image, title, description, price, stock, thumbnail} }) => {

    const initial = 1;
    const [add,setAdd] = useState(false);
    const [quantity,setQuantity] = useState(1)

    const itemQuantity = (count) => {
        setQuantity(count)
    }
    const addToCart =()=>{
        console.log("itemDetault " + quantity);
        setAdd(true);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="imagenPrincipal">
                        <img src={thumbnail} alt="" />
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
                        <ItemCount stocks={stock} initial={initial} onAdd={itemQuantity} /> 
                        <button className="addCartPro" onClick={addToCart}>Agregar al Carrito</button>
                        {add ? <Link to= {'/cart'}><button className="btn addCartPro">Comprar Ahora</button></Link> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;