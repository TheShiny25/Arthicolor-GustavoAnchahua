import React from 'react'
import {Routes,Route} from "react-router-dom"
import ItemDetailContainer from '../container/itemDetailContainer';
import ItemListContainer from '../container/itemListContainer';


const Main = ()=>{
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer contenido="Arthicolor"/>}>
            </Route>
            <Route path="/category/:nomCategory" element={<ItemListContainer contenido="Lista de Category"/>}>
            </Route>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}>
            </Route>
        </Routes>
    );
}

export default Main;