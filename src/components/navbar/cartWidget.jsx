import React from 'react';
import imgCart from '../../assets/shopping-cart.png';
import './cartWidget.css';


const CartWidget =()=>{
    return (
        <div className='boxCart'>
            <img src={imgCart} alt="" />
            <span className='nCart'>(0)</span>
        </div>
    );

}

export default CartWidget;