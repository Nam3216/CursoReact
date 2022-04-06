import React,{useState,useEffect} from "react";
import "./EstiloItem.css"
import Contador from "../ejercicios/comp-contador/contador"
//import { DetailProduct } from "../events/detailProduct";//entre{} tengo q traer nombre archivo y funcion para q funcione
import {Link} from "react-router-dom"

const Item=({data})=>{
    const{product,size,price,brand,id,img,category}=data //desestructuracion
  
    
    //agregue funcion onAdd aca, queda bien debajo de cada item que muestre contador
    const onAdd=(count)=>{
        if(count<10){
            alert(`Ahora tienes ${count} items en tu pedido`)
        }
    }
   
    
    const detail=(id)=>{
        alert(JSON.stringify(id.id))

    }

    //en los links les paso el elemento dinamico por el que quiero que lo busque despues

        return(

            <div className="item-list-item" key={id}>
               <Link to={`/productos/${id}`}> <img src={img} alt="Cargando"/></Link>
                <p>{product} talle: {size}</p>
                <p>Marca: {brand}</p>
                <p>$ {price}</p>
                <button ><Link to={`/productos/${id}`}> Ver Detalle </Link></button>
                <button ><Link to={`/productos/categoria/${category}`}> Ver Categoria </Link></button>
                <Contador stock={10} initial={1} onAdd={onAdd}/>
            
            </div>

        )
    

}

export default Item;