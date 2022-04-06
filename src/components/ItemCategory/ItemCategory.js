import React,{useEffect,useState} from "react";
import {ProductsMock} from "../MockList/ProductsMock"
import {useParams} from "react-router-dom"
import "./estiloItemCategory.css"
import {Link} from "react-router-dom"

const ItemCategory=({data})=>{
    //muestra los productos segun categoria que se lo pasa CategoryProducts
    const{product,size,price,brand,img,description,category,id}=data
    

    return(
        <div className="item-category"> 
            
                    <div className="item-list-item-category" key={id}>
                        <img src={img} alt="Imagen cargando"/>
                        <p>{product} talle: {size}</p>
                        <p>Marca: {brand}</p>
                        <p>$ {price}</p>
                        <button><Link to={`/productos/${id}`}>Ver Detalle </Link></button>
                        </div>
             
        </div>

    )

}

export default ItemCategory;