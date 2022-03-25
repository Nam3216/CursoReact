import React from "react";
import "./EstiloItem.css"
import Contador from "../ejercicios/comp-contador/contador"

const Item=({data})=>{
    //agregue funcion onAdd aca, queda bien debajo de cada item que muestre contador
    const onAdd=(count)=>{
        if(count<10){
            alert(`Ahora tienes ${count} items en tu pedido`)
        }
    }
   const{product,size,price,brand,id,img}=data //desestructuracion

    return(

        <div className="item-list-item" key={id}>
            <img src={img} alt="Cargando"/>
            <p>{product} talle: {size}</p>
            <p>Marca: {brand}</p>
            <p>$ {price}</p>
            <button>Ver Detalle</button>
            <Contador stock={10} initial={1} onAdd={onAdd}/>
        </div>

    )
}

export default Item;