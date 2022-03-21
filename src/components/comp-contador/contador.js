
import React,{useState} from "react";
import "./estilocontador.css"
const Contador=(props)=>{

    const [count, stateCount]=useState(props.initial)

    const restar=()=>{
        if (count>0){
            stateCount(count-1)
        }
    }

    const sumar=()=>{
        if (count<props.stock){
            stateCount(count+1)
        }
    }
//importante es definir una funcion flecha si agarro por props una funcion de otro componente, y a la vez quiero pasar parametro.´+
    return(

        <div className="contador">
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <p>{count}</p>
            <button onClick={()=>props.onAdd(count)}>Modificar pedido</button>
        </div>
    )
}


export default Contador;