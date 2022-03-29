import React,{useState,useEffect} from "react";
import "./EstiloItem.css"
import Contador from "../ejercicios/comp-contador/contador"
//import { DetailProduct } from "../events/detailProduct";//entre{} tengo q traer nombre archivo y funcion para q funcione

const Item=({data})=>{
    const{product,size,price,brand,id,img}=data //desestructuracion
  
    
    //agregue funcion onAdd aca, queda bien debajo de cada item que muestre contador
    const onAdd=(count)=>{
        if(count<10){
            alert(`Ahora tienes ${count} items en tu pedido`)
        }
    }
   
    
    const detail=(id)=>{
        alert(JSON.stringify(id.id))

    }

    

        return(

            <div className="item-list-item" key={id}>
                <img src={img} alt="Cargando"/>
                <p>{product} talle: {size}</p>
                <p>Marca: {brand}</p>
                <p>$ {price}</p>
                <button onClick={()=>detail({id})}>Ver Detalle</button>
                <Contador stock={10} initial={1} onAdd={onAdd}/>
            
            </div>

        )
    

}

export default Item;