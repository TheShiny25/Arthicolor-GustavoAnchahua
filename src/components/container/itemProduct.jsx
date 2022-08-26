import React from "react";
import ItemCount from "./itemCount";

const ItemProduct = ()=>{
    return (<div className="col-lg-2">
        <div className="boxPro">
            <div className="proImg">
                Nombre de Producto
            </div>
            <ItemCount stocks='5' initial='0'/>
            <div>Agregar Carrito</div>
        </div>
    </div>
    )
}
export default ItemProduct;