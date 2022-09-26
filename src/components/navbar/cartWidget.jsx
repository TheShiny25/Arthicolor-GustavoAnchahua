import React from 'react';
import {Link} from 'react-router-dom';
import imgCart from '../../assets/shopping-cart.png';
import './cartWidget.css';

import useCartContext  from '../../context/cartContext';

const CartWidget =()=>{
    const {cartWidgetCount} = useCartContext()
    return (
        <div className='boxCart'>
            <Link to= {'/cart'}>
            <img src={imgCart} alt="" />
            <span className='nCart'>({cartWidgetCount()})</span>
            </Link>
        </div>
    );
}

export default CartWidget;