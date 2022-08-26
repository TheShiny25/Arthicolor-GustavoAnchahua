import React,{useState,useEffect} from "react";
import './itemCount.css'

const ItemCount = ({stocks,initial})=>{
    //console.log(stocks,initial);
    
    const [stockPrincipal,setStockPrincipal] = useState(stocks);
    const [count,setCount] = useState(0)
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

    return (<div className="box-contador">
        <span className="StockDisponible">Stock Actual: {stockPrincipal}</span>
        <div className="row">
            <div onClick={removeItem} className="col-lg-3"><span>-</span></div>
            <div className="col-lg-6"><span>{count}</span></div>
            <div onClick={addItem} className="col-lg-3"><span>+</span></div>
        </div>
        <span className="mensaje">*mensajito</span>
    </div>)
}

export default ItemCount;
