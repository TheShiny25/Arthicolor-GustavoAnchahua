import React from 'react';
import imgCart from '../../assets/shopping-cart.png';
import './cartWidget.css';

import useCartContext  from '../../context/cartContext';

const CartWidget =()=>{
    const {cartWidgetCount} = useCartContext()
    return (
        <div className='boxCart'>
            <img src={imgCart} alt="" />
            <span className='nCart'>({cartWidgetCount()})</span>
        </div>
    );
}

export default CartWidget;