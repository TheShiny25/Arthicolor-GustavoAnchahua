import React, { useState } from 'react'
import useCartContext from '../../../context/cartContext';
import './cart.css'

const Cart =()=>{
    const {products, removeItem, totalProductsPrice, cleanListCart} = useCartContext();
    const handleRemove = (i) => {
        removeItem(i.id)
    }

    return (<section className="cart">
        <div className="titulo_principal">
            <h3>Carrito de Compras</h3>
        </div>
        <div className="shopping-cart row">
        {products.map((item) => (
                    <div key={item.id} className="product col-lg-3 ">
                        <div className="product-image">
                            <img src={item.thumbnail} alt={item.id}/>
                        </div>
                        <div className="product-details">
                            <h2>{item.title}</h2>
                        </div> 
                        <div className="itemPro product-price">
                            <label htmlFor="price">Precio: </label>
                            <span className="price"> ${item.price}</span>
                        </div>
                        <div className="itemPro product-quantity">
                            <label htmlFor="quantity">Cantidad: </label>
                            <span className="quantity">{item.quantity}</span>
                        </div>
                        <div className="itemPro product-line-price">
                            <label htmlFor="total">Total: </label>
                            <span className="total"> ${item.quantity*item.price}</span>
                        </div>
                        <div className="product-removal">
                            <button className="remove-product" onClick={()=>handleRemove(item)}> 
                                Eliminar
                            </button>
                        </div>
                    </div>
                    )
                )}
        </div>
        <div className="totals col-lg-2">
            <div class="totals-item">
                        <label>Subtotal</label>
                        <div class="totals-value">$ {totalProductsPrice()}</div>
                    </div>
                    <div class="totals-item">
                        <label>Costo de envío</label>
                        <div class="totals-value">$ 10</div>
                    </div>
                    <div class="totals-item t-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">$ {totalProductsPrice() + 10}</div>
                    </div>
                    <div className="btn_comprar">
                        <button className ="checkout">Terminar Compra</button>
                    </div>                    
                    
            </div>
    </section>);
}

export default Cart;