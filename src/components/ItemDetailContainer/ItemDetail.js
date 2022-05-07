import React,{useState,useEffect} from "react"
import "./estiloItemDetail.css"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"

const ItemDetail=({data})=>{

    const{product,size,price,brand,id,img,description,quantity}=data
    const[valueCount,setValueCont]=useState(0)
    const[button,setButton]=useState(" ")//estado que va a guardar jsx del boton comprar
    const[button2,setButton2]=useState(" ")//estado que va a guardar jsx del boton seguir comprando
    const[check,setCheck]=useState(true)//para q aparezca y desapareza ItemCount
    //  const[quantityForProductDetail,setQuantityForProductDetail]=useState(0)//cantidad obtenida del cartList segun el producto que se muestra
    const navigate=useNavigate()

   
   const {cartList,addProduct,deleteProduct}=useContext(CartContext)//contexto
    
    let buttonBuy=(<Button className="buttons-comprar" id="add-buy" variant="outline-primary" onClick={()=>navigate("/cart")} >Comprar</Button>)   //asi guardo un elemento para que despues lo muestre con un estado
    let buttonBuy2=(<Button className="buttons-comprar" id="add-buy" variant="outline-primary" onClick={()=>navigate("/productos")} >Seguir Comprando</Button>) 
   
    //agregue funcion onAdd aca, queda bien debajo de cada item que muestre contador
    const onAdd=(count,product)=>{
        if(count<=10){
            
            setValueCont(count)
            addProduct(data,count)

            if (count>=1){
                setButton(buttonBuy)
                setButton2(buttonBuy2)
                setCheck(false)
               
            }
            else{
                setButton(" ")
                setButton(" ")
            }
            
        }
       

    }
    return(

        <div className="item-detail" key={id}>
             <img id="item-detail-img"src={img} alt="aun cargando"/>
            <div className="item-detail-detail">
              
                <h3>{product} marca {brand}</h3>
                <p>{description}</p>
                <p>Precio: $ {price}</p>
                
               
                <p>Stock 10 unidades por persona</p>
                <p>Usted ha seleccionado {valueCount} productos</p>
                {check &&(
                <ItemCount stock={10} initial={1} onAdd={onAdd} product={data} msg={"Agregar al carrito"}/> )}
               
                
                <div className="container-comprar" id="button-buy">{button}</div> {/*es el state para el codigo del boton comprar, lo muestra si se activa desde addon*/}
                <div className="container-comprar">{button2}</div>{/*podria hacerlo asi o directo si el estado check cambia, que se despliegue los botones, sin necesidad de declararlos en un string*/}

                
                        
                
                
            </div>

        </div>
    )
}

export default ItemDetail;

