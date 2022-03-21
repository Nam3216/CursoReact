import React, {useState,useEffect}from "react"//1 importo el hook
import "./estiloNotas.css";


const Articles=(props)=>{
    //2 lo defino con 2 parametros, 1 el nombre q va a tener el estado(puede ser cualquiera), 2=funcion q va a permitir modificar estado, por convencion es set+Nombredelestado. entre parentesis le paso un valor al estado
    const[count,setCount]=useState(1)//le doy valor al contador
    console.log("estado contador: ",count)
   
    const addStock=()=>{
        setCount(count +1)//4 aca llamo para modificar el count, con su funcion setCount y entre parentesis le digo q hace, sumo 1 al count
    }

    useEffect(()=>{
        console.log("Es el useEffect")
    })

    return(
        <div className="articles">
            
            <p><a>{props.title}</a></p>
            <img src={props.img}></img>
            <p>{props.subtitle}</p>
            <p>Lecturas: {count}</p>

            <button className="boton-articulo" onClick={addStock}>Agregar Nota</button>

        </div>

    )
}

export default Articles ;