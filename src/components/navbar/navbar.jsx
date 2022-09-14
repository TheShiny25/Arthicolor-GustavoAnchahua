import React from "react";
import {Link} from 'react-router-dom'
import CartWidget from "./cartWidget";
import './navbar.css';


const NavbarPrincipal = () => {

   //const [category, setCategory] = useState([]);
    const categoryAll = ["smartphones","laptops","fragrances","skincare","motorcycle"]

/*    const getCategoryAll = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories');
            const data = await response.json();
            
            setCategory(data);
        } catch (error) {
            console.log("Error: " + error);
        }
    }*/

    /*useEffect(() => {
        //getCategoryAll();
    }, []);*/
    //console.log(category);

    return (
        <div className="containerNav row">
            <div className="logoPrincipal">
                <div className="col-lg-3">
                    <Link to="/">
                        <h1>Arthi<strong>color</strong></h1>
                    </Link>
                </div>
                <div className="col-lg-7">

                </div>
                <div className="col-lg-2">
                    <CartWidget />
                </div>
            </div>
            <div className="contentNav">
                <ul>
                    {categoryAll.map(category=>
                        
                            <li key={category}>
                                <Link to={'/category/' + category} target="_top">{category}</Link>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default NavbarPrincipal;