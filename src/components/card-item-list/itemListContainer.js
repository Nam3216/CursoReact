import { Children } from "react";
import Cards from "./Cards"
import Contador from "../ejercicios/comp-contador/contador"
import ItemList from "./ItemList";

//es un componente q va a tener de hijos a las cards. por eso importo cards

const ItemListContainer=({Children})=>{




    /* <h2>{children}</h2>
            <Cards title="Remera" talle="L" price="2000"/>
            <Cards title="Ciclista" talle="L" price="5000"/>
            <Contador stock={10} initial={1} onAdd={onAdd}/>*/
            //<Cards title="Ciclista" talle="L" price="5000" img="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/71a32748-90e9-4396-b2bf-f9383333088e.e1828d57e532c17795db91d2905aa382.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"/>
           /* const detail=(id)=>{
                alert("OK")
        
            }*/
    
    return(
        <div className="container-cards">
            
           
            
            
            <ItemList />




        </div>

        
    )

    //<h2>{Children}</h2>
}

export default ItemListContainer;