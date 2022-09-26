import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import useCartContext from '../../context/cartContext';

import ItemCount from './itemCount';
import './itemDetail.css';

const ItemDetail = ({item}) => {
    console.log(item);
    const stocks = item.stock;
    const initial = 1;
    const [add,setAdd] = useState(false);
    const [quantity,setQuantity] = useState(1)
    const { addItem } = useCartContext()

    const itemQuantity = (count) => {
        setQuantity(count)
        //console.log(count);
    }
    const addToCart =()=>{
        //console.log("itemDetault " + quantity);
        addItem(item, quantity)
        setAdd(true);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="imagenPrincipal">
                        <img src={item.thumbnail} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bloqProducto">
                        <div className="titulo">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="descripcion">
                            <p>{item.description}</p>
                        </div>
                        <div className="price">
                            <span>{item.price}</span>
                        </div>
                        <ItemCount stocks={stocks} initial={initial} onAdd={itemQuantity} /> 
                        <button className="addCartPro" onClick={addToCart}>Agregar al Carrito</button>
                        {add ? <Link to= {'/cart'}><button className="btn addCartPro">Comprar Ahora</button></Link> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;