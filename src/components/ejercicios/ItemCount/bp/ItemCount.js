
import React,{useState} from "react";
import "./estilocontador.css"
import Button from 'react-bootstrap/Button';

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
            <button className="boton-operacion" onClick={restar}>-</button>
            <p>{count}</p>
            <button className="boton-operacion"onClick={sumar}>+</button>
            
            <button id="boton-funcion" onClick={()=>props.onAdd(count,props.product)}>{props.msg}</button>
            <Button variant="primary">Primary</Button>
        </div>
        </div>
    )
}


export default ItemCount;