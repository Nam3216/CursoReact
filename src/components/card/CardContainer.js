import { Children } from "react";
import Cards from "./Cards"

//es un componente q va a tener de hijos a las cards. por eso importo cards

const ListProducts=({children})=>{
    return(
        <div className="container-cards">
            
            <h2>{children}</h2>
            <Cards title="Remera" talle="L" price="2000"/>
            
            <Cards title="Ciclista" talle="L" price="5000"/>
            




        </div>

        
    )

    //<h2>{Children}</h2>
}

export default ListProducts;