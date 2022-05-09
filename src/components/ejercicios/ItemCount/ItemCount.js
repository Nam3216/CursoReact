
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
//modifico clase de item count, segun se lo llame desde item detail o cartpage
    return(
        <div className="item-count-container">
        <div className="p-count">
            <p id="p-count">Cantidad: {count}</p>
        </div>
        
        <div className={props.msg=="Modifica" ? "contador-container-cart":"contador-container"}>
            <Button className={props.msg=="Modifica"? "buttons-sum-minus-cart":"buttons-sum-minus"} id={props.msg=="Modifica" ?"resta-cart":"resta"}  variant="outline-primary" onClick={restar}>-</Button>{' '}
            
            <Button className={props.msg=="Modifica"? "buttons-sum-minus-cart":"buttons-sum-minus"} id={props.msg=="Modifica" ?"suma-cart":"suma"}  variant="outline-primary" onClick={sumar}>+</Button>{' '}
            
            <Button className={props.msg=="Modifica"? "buttons-add-cart":"buttons-add"}  id={props.msg=="Modifica" ?"add-cart":"add"} variant="outline-primary" onClick={()=>props.onAdd(count,props.product)}>{props.msg}</Button>{' '}
            
        </div>
        </div>
    )
}


export default ItemCount;