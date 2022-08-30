import React from "react";
import ItemCount from "./itemCount";
import './itemProduct.css'

const ItemProduct = ({itemProduct:{image,price,title,rating}}) =>{
    const {count} = rating
    return (
    <div className="col-lg-3">
        <div className="boxPro">
            <div className="proImg">
                <img src={image} alt=""/>
            </div>
            <div className="proTitle">
                {title}
            </div>
            <div className="proPre">
                {`$/ `+ price}
            </div>
            <ItemCount stocks={count} initial='0'/>
            <div className="addCartPro">Agregar Carrito</div>
        </div>
    </div>
    )
}
export default ItemProduct;