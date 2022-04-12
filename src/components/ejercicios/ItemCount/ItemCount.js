
import React,{useState} from "react";
import "./estilocontador.css"

const ItemCount=(props)=>{

    const [count, stateCount]=useState(props.initial)

    const restar=()=>{
        if (count>1){
            stateCount(count-1)
        }
    }

    const sumar=()=>{
        if (count<props.stock){
            stateCount(count+1)
        }
    }
//importante es definir una funcion flecha si agarro por props una funcion de otro componente, y a la vez quiero pasar parametro.´+


//uso en item detail y en cartPage. es importante la props.product que recibe, con eso en cartPage la funcion obtiene el producto y cambia la cantidad en el indicado
    return(
        <div className="cont-contador">
        <div className="contador">
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <p>{count}</p>
            <button id="boton-funcion" onClick={()=>props.onAdd(count,props.product)}>{props.msg}</button>
        </div>
        </div>
    )
}


export default ItemCount;