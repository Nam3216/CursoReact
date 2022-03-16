import React from "react"
import "./estiloCard.css"


//dentro de las {}en jsx puedo poner cualquier cosa de js
const Cards= (props)=>{//recibe las propiedades por props, (las q puse en app.js), las recibe como objeto. para entrar es props.nombre. props.talle
    return(
    <div className="card">
        <p>{props.title}</p>
        <p>Precio: {props.price}</p>
        <p>Talle: {props.talle}</p>
        <button>Comprar</button>
    </div>

    )
//ahi entro al objeto, a la propiedad y llamo lo que qyueri, se puede combinar con texto

}

export default Cards;

//tambien funciona asi, en vez de props, escribir que recibe lo q pongo en jsx, y despues no hace falta llamarlo con props.talle, solo talle*/
//ahi entro al objeto, a la propiedad y llamo lo que qyueri, se puede combinar con texto
//recibe las propiedades por props, (las q puse en app.js), las recibe como objeto. para entrar es props.nombre. props.talle
/*const Cards= ({talle, price, title})=>{
    
    return(<div class="card">
            <p>{title}</p>
            <p>Precio: {price}</p>
            <p>Talle: XL {talle}</p>
            <button>Comprar</button>


         </div>

    )
}
export default Cards;*/
