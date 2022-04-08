import { Children } from "react";
//import Cards from "./Cards"
//import Contador from "../ejercicios/comp-contador/contador"
import ItemList from "./ItemList";

//es un componente q va a tener de hijos a las cards. por eso importo cards

const ItemListContainer=({Children})=>{




    
    return(
        <div className="container-cards">
            
           
            
            
            <ItemList />




        </div>

        
    )

    //<h2>{Children}</h2>
}

export default ItemListContainer;