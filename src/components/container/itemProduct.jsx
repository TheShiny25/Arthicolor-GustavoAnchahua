import React from "react";
import {Link} from 'react-router-dom'
import ItemCount from "./itemCount";
import './itemProduct.css'

const ItemProduct = ({itemProduct:{id,title,price,thumbnail}}) =>{
    //console.log(id)
    /*const {count} = rating*/
    return (
    <div className="col-lg-3">
        <div className="boxPro">
            <div className="proImg">
                <img src={thumbnail} alt=""/>
            </div>
            <div className="proTitle">
                {title}
            </div>
            <div className="proPre">
            Precio:  {`$/ `+ price}
            </div>
            {/*<ItemCount stocks={count} initial='0'/>*/}
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    </div>
    )
}
export default ItemProduct;