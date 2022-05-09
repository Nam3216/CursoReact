import React,{useState,useEffect} from "react";
import "./EstiloItem.css"
import Button from 'react-bootstrap/Button';

//import { DetailProduct } from "../events/detailProduct";//entre{} tengo q traer nombre archivo y funcion para q funcione
import {Link} from "react-router-dom"

const Item=({data})=>{
    const{product,size,price,brand,id,img,category,offer}=data //desestructuracion

    /*
    
    const detail=(id)=>{
        alert(JSON.stringify(id.id))

    }*/

    //en los links les paso el elemento dinamico por el que quiero que lo busque despues

        return(

            <div className="item-list-item" key={id}>
               <Link to={`/productos/${id}`}> <img src={img} alt="Cargando"/></Link>
                <p>{product} talle: {size}</p>
                <p>Marca: {brand}</p>
                <p>$ {price}</p>
               <Link to={`/productos/${id}`}> <Button > Ver Detalle </Button></Link>
                <Link to={`/productos/categoria/${category}`}><Button >Categoria</Button> </Link>
                
            </div>

        )
    

}

export default Item;