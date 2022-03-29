import React,{useState,useEffect} from "react"
import "./estiloItemDetail.css"

const ItemDetail=({dataOk,noShow})=>{

    const{product,size,price,brand,id,img,description}=dataOk
   

    

      

    return(

        <div className="item-detail" key={id}>
             <img src={img} alt="aun cargando"/>
            <div className="item-detail-detail">
               
                <p>{product} marca {brand}</p>
                <p>Talle: {size}</p>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
                <button>Comprar</button>
                <button onClick={noShow}>Ocultar detalle</button>
                
                
            </div>

        </div>
    )
}

export default ItemDetail;