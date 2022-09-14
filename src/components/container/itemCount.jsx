import React,{useState} from "react";
import './itemCount.css'

const ItemCount = ({stocks,initial,onAdd})=>{
    //console.log(stocks,initial,onAdd);
    
    const [stockPrincipal,setStockPrincipal] = useState(stocks);
    const [count,setCount] = useState(initial)
    const removeItem = ()=>{
        if(count > initial) {
            setCount(count - 1); 
            setStockPrincipal(stockPrincipal + 1);
        };
    }
    const  addItem = ()=>{
        if(count < stocks){
            setCount(count + 1);
            setStockPrincipal(stockPrincipal - 1);
        };
    }
    //console.log(onAdd);
    //console.log(count);
    onAdd(count);

    return (<div className="box-contador">
        <span className="StockDisponible">Stock Disponible: <strong>{stockPrincipal}</strong> unidades</span>
        <div className="boxCount">
            <div onClick={removeItem} className="col-lg-3"><span>-</span></div>
            <div className="col-lg-6"><span>{count}</span></div>
            <div onClick={addItem} className="col-lg-3"><span>+</span></div>
        </div>
    </div>)
}

export default ItemCount;

