import React,{useState,useEffect} from "react"
import "./estiloItemDetail.css"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import {Link} from "react-router-dom"
const ItemDetail=({data})=>{

    const{product,size,price,brand,id,img,description}=data
    const[valueCount,setValueCont]=useState(0)
    const[button,setButton]=useState(" ")//estado que va a guardar jsx del boton comprar
    const[check,setCheck]=useState(true)//para q aparezca y desapareza ItemCount
   
    
    
    let buttonBuy=(<Link to={"/cart"} ><button id="button-comprar">Comprar</button></Link>)//asi guardo un elemento para que despues lo muestre con un estado
    //agregue funcion onAdd aca, queda bien debajo de cada item que muestre contador
    const onAdd=(count)=>{
        if(count<=10){
            
            setValueCont(count)

            if (count>=1){
                setButton(buttonBuy)
                setCheck(false)
               
            }
            else{
                setButton(" ")
            }
            
        }
       

    }
    //<ItemCount stock={10} initial={1} onAdd={onAdd}/>

      

    return(

        <div className="item-detail" key={id}>
             <img src={img} alt="aun cargando"/>
            <div className="item-detail-detail">
               
                <p>{product} marca {brand}</p>
                <p>Talle: {size}</p>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
               
                <p>Stock 10 unidades por persona</p>
                <p>Usted ha seleccionado {valueCount} productos</p>
                {check &&(
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>)}
                <div>{button}</div>
                
                
                
            
                
                
            </div>

        </div>
    )
}

export default ItemDetail;