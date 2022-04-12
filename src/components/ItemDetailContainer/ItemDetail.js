import React,{useState,useEffect} from "react"
import "./estiloItemDetail.css"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import {Link} from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const ItemDetail=({data})=>{

    const{product,size,price,brand,id,img,description,quantity}=data
    const[valueCount,setValueCont]=useState(0)
    const[button,setButton]=useState(" ")//estado que va a guardar jsx del boton comprar
    const[check,setCheck]=useState(true)//para q aparezca y desapareza ItemCount
    const[quantityForProductDetail,setQuantityForProductDetail]=useState(0)//cantidad obtenida del cartList segun el producto que se muestra

   
   const {cartList,addProduct,deleteProduct}=useContext(CartContext)//contexto
    
    let buttonBuy=(<Link to={"/cart"} ><button id="button-comprar">Comprar</button></Link>)//asi guardo un elemento para que despues lo muestre con un estado
    //agregue funcion onAdd aca, queda bien debajo de cada item que muestre contador
    const onAdd=(count,product)=>{
        if(count<=10){
            
            setValueCont(count)
            addProduct(data,count)

            if (count>=1){
                setButton(buttonBuy)
                setCheck(false)
               
            }
            else{
                setButton(" ")
            }
            
        }
       

    }
    return(

        <div className="item-detail" key={id}>
             <img src={img} alt="aun cargando"/>
            <div className="item-detail-detail">
               {console.log(quantityForProductDetail, "quantituforproductdetail")}
                <p>{product} marca {brand}</p>
                <p>Talle: {size}</p>
                <p>Precio: $ {price}</p>
                <p>{description}</p>
               
                <p>Stock 10 unidades por persona</p>
                <p>Usted ha seleccionado {valueCount} productos</p>
                {check &&(
                <ItemCount stock={10} initial={1} onAdd={onAdd} product={data} msg={"Agregar al carrito"}/>)}
                
                <div>{button}</div>
                
                
                
            
                
                
            </div>

        </div>
    )
}

export default ItemDetail;

/*<ItemCount stock={10} initial={
                   //si el producto esta en lista de carrito, q devuelva esa cant. sino 0 
                    cartList.find(item=>item.id==id) ? (
                        cartList.map((product)=>{
                          
                            return product.quantity
                            
                   
                   
                })): (  0)} onAdd={onAdd}/>)}*/